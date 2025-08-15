import { CustomChat, FacebookProvider } from "react-facebook";

function FacebookMessenger() {
  return (
    <FacebookProvider appId={import.meta.env.VITE_MESSENGER_APP_ID} chatSupport>
      <CustomChat pageId={import.meta.env.VITE_FB_PAGE_ID} minimized={false} />
    </FacebookProvider>
  );
}

export default FacebookMessenger;
