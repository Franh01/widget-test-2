import EmojiPicker from "emoji-picker-react";
import { useTranslation } from "react-i18next";

const EmojiSelector = ({ height, onClick }) => {
  const [te] = useTranslation("emojis");
  return (
    <EmojiPicker
      height={height}
      onEmojiClick={onClick}
      emojiStyle="native"
      previewConfig={{ showPreview: false }}
      searchPlaceHolder={te("search")}
      categories={[
        {
          category: "suggested",
          name: te("frequently_used"),
        },
        {
          category: "smileys_people",
          name: te("smileys_and_people"),
        },
      ]}
    />
  );
};

export default EmojiSelector;
