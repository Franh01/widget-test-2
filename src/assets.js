const colorMain = "#ffa35a";
const colorMainDark = "#d18842";
// const colorMainLight = "#ffbb8a";
// const colorSecondary = "#087e8b";
// const colorSecondaryDark = "#005d65";
// const colorSecondaryLight = "#2495a1";
// const primaryTextColor = "#24374e";
// const secondaryTextColor = "#43556c";

export const styles = `
    .widget__container * {
        box-sizing: border-box;
    }        
    h3, p, input {
        margin: 0;
        padding: 0;
    }
    .widget__container {
        box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
        width: 400px;
        overflow: auto;
        right: -25px;
        bottom: 75px;
        position: absolute;
        transition: max-height .2s ease;
        font-family: Helvetica, Arial ,sans-serif;
        background-color: #e6e6e6a6;
        border-radius: 10px;
        box-sizing: border-box;
    }
    .widget__icon {
        cursor: pointer;
        width: 60%;
        position: absolute;
        top: 18px;
        left: 16px;
        transition: transform .3s ease;
    }
    .widget__hidden {
        transform: scale(1); //!SCALE
    }
    .button__container {
        border: none;
        background-color: ${colorMain};
        width: 60px;
        height: 60px;
        border-radius: 50%;
        cursor: pointer;        
        transition: 200ms;
    }
    .button__container:hover{
        background-color: ${colorMainDark};
        transition: 200ms;
        
    }
    .widget__container.hidden {
        max-height: 0px;
    }
    .widget__header {
        padding: 40px 32px;
        background-color: ${colorMain};        
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width:100%;
        justify-content: space-between;

        display:flex;
        box-sizing: border-box;
    }
    
    form {
        padding: 2rem 1rem 1.5rem;
    }
    form .form__field {
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
    }
    .form__field label {
        margin-bottom: 8px;
        font-size: 14px;
    }
    .form__field input,
    .form__field textarea {
        border: 1px solid #000000ad;
        border-radius: 3px;
        padding: 8px 10px;
        background-color: #fff;
    }
    .form__field input {
        height: 48px;
    }
    .form__field textarea::placeholder {
        font-family: Helvetica, Arial ,sans-serif;
    }
    form button {
        height: 48px;
        border-radius: 6px;
        font-size: 18px;
        background-color: #000;
        color: #fff;
        border: 0;
        width: 100%;
        cursor: pointer;
    }
    form button:hover {
        background-color: rgba(0, 0, 0, 95%);
    }

    
    #eachAgent {
        height: 45px;
        width: 45px;
        border: 2px solid ${colorMain};
        border-radius: 50%;
        position: absolute; 
    }
    #agents {
        width:150px;
        position: relative;
        display: flex;
        justify-content: flex-end;
    }
   
    
`;

export const WIDGET_ICON = `
<svg id="default-button-icon" width="50px" height="50px" viewBox="0 5 40 35" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="icons" stroke="none" fill="none"><g id="icon/chat" fill="#FFFFFF"><path d="M10 18l-4 4v-4h4zm7-12a5 5 0 010 10H7A5 5 0 017 6z" id="icon"></path></g></g></svg>
`;

export const CLOSE_ICON = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
`;
