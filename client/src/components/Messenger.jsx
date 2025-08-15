import MessengerCustomerChat from "react-messenger-customer-chat";

export default function Messenger() {
  return (
    <div>
      <MessengerCustomerChat
        pageId={import.meta.env.VITE_FB_PAGE_ID}
        appId={import.meta.env.VITE_MESSENGER_APP_ID}
      />
    </div>
  );
}
