import { createContext, useContext, useEffect, useState } from "react";
import httpClient from "../components/utils/httpClient";
import { useSnackContext } from "./SnackContext";
import { useUserContext } from "./UserContext";
import { useTranslation } from "react-i18next";
import { SocketContext } from "./SocketContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [ts] = useTranslation("snacks");
  const [activeChats, setActiveChats] = useState({
    WhatsApp: 0,
    Website: 0,
    Messenger: 0,
    Instagram: 0,
    "Facebook muro": 0,
    Teams: 0,
  });

  const [conversations, setConversations] = useState([]);
  const [lastChatInfo, setLastChatInfo] = useState(null);
  const [filteredConversations, setFilteredConversations] = useState([]);
  const [processedConversations, setProcessedConversations] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [comments, setComments] = useState([]);
  const { openSnack } = useSnackContext();
  const { userInfo } = useUserContext();
  const [trigger, setTrigger] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const { socket, socketIsEnabled } = useContext(SocketContext);

  const updateLastChat = (data) => {
    setLastChatInfo(data);
  };

  const updateActiveChats = async (c) => {
    setConversations(c);
  };

  const updateSelectedChat = async (chat) => {
    if (!socket || !socketIsEnabled) return;
    if (!chat && selectedChat) {
      socket.emit(`client:user-remove-conversation-by-id-view`, {
        conversation_id: selectedChat?._id,
      });
    }
    setSelectedChat(chat);
  };

  useEffect(() => {
    const newConversations = conversations?.filter((c) => {
      return !processedConversations.includes(c._id);
    });

    newConversations?.forEach((c) => {
      createContact(c);
    });
    // eslint-disable-next-line
  }, [conversations, userInfo]);

  const createContact = async (c) => {
    try {
      await httpClient.post("api/contacts/getnamebychannel", {
        channel: c.channel,
        identificator: c.from,
        organization_id: userInfo.organization_id,
        type: c.conversation_type,
      });
      setProcessedConversations((prevProcessedConversations) => [
        ...prevProcessedConversations,
        c._id,
      ]);
    } catch (error) {
      setProcessedConversations((prevProcessedConversations) => [
        ...prevProcessedConversations,
        c._id,
      ]);

      try {
        await httpClient.post("api/contacts/create", {
          name: c.profile.name,
          phone_number: c.channel === "whatsapp" ? c.from : null,
          image_url: null,
          organization_id: userInfo.organization_id,
          id_facebook: c.channel === "facebook" ? c.from : null,
          id_instagram: c.channel === "instagram" ? c.from : null,
          id_messenger: c.channel === "messenger" ? c.from : null,
          id_teams: c.channel === "teams" ? c.from : null,
          id_instagram_muro_comments:
            c.channel === "instagram_muro" && c.conversation_type === "comments"
              ? c.from
              : null,
          id_instagram_muro_mentions:
            c.channel === "instagram_muro" && c.conversation_type === "mentions"
              ? c.from
              : null,
          id_facebook_muro: c.channel === "facebook_muro" ? c.from : null,
          id_google_chat: c.channel === "google_chat" ? c.from : null,
          channel: c.channel,
          type: c.conversation_type,
        });

        openSnack(ts("contact_created"), "success");
      } catch (error) {
        openSnack(error.response.data, "error");
      }
    }
  };

  useEffect(() => {
    let whatsapp = 0;
    let website = 0;
    let instagram = 0;
    let instagram_muro = 0;
    let messenger = 0;
    let fbmuro = 0;
    let teams = 0;
    let google_chat = 0;

    if (conversations?.length > 0) {
      conversations?.map((c) => {
        if (c.channel === "whatsapp") {
          whatsapp += +1;
        }
        if (c.channel === "instagram") {
          instagram += +1;
        }
        if (c.channel === "instagram_muro") {
          instagram_muro += +1;
        }
        if (c.channel === "messenger") {
          messenger += +1;
        }
        if (c.channel === "teams") {
          teams += +1;
        }
        if (c.channel === "google_chat") {
          google_chat += +1;
        }
        return setActiveChats({
          WhatsApp: whatsapp,
          Website: website,
          Messenger: messenger,
          Instagram: instagram,
          "Instagram muro": instagram_muro,
          "Facebook muro": fbmuro,
          Teams: teams,
          "Google chat": google_chat,
        });
      });
    } else {
      return setActiveChats({
        WhatsApp: whatsapp,
        Website: website,
        Messenger: messenger,
        "Instagram muro": instagram_muro,
        "Facebook muro": fbmuro,
        Teams: teams,
        "Google chat": google_chat,
      });
    }
  }, [conversations]);

  useEffect(() => {
    if (!socket || !socketIsEnabled) return;
    socket.on(`server:conversations-by-user`, (conversations) => {
      setConversations(conversations);
    });

    socket.on(`server:conversation-by-id`, (data) => {
      if (data._id !== selectedChatId) {
        setSelectedChatId(data._id);
        setSelectedChat(data);
      }
      setMessages(data.messages);
    });
    socket.emit(`client:conversations-by-user`, {
      user_id: userInfo.user_id,
    });

    return () => {
      // console.log("Disconnecting socket...");
      socket.off(`server:conversations-by-user`);
    };
  }, [socket, socketIsEnabled, userInfo]);

  useEffect(() => {
    setMessages(selectedChat ? selectedChat.messages : []);
    setComments(selectedChat ? selectedChat.comments : []);
  }, [selectedChat]);

  const removeConversationById = (conversation_id) => {
    const filteredConversations = conversations.filter(
      (c) => c._id !== conversation_id
    );

    setConversations(filteredConversations);
  };

  return (
    <ChatContext.Provider
      value={{
        activeChats,
        updateActiveChats,
        updateLastChat,
        lastChatInfo,
        filteredConversations,
        setFilteredConversations,
        conversations,
        selectedChat,
        updateSelectedChat,
        messages,
        comments,
        createContact,
        removeConversationById,
        setTrigger,
        trigger,
        selectedChatId,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  return useContext(ChatContext);
};

// const { updateSelectedChat, selectedChat } = useChatContext();
