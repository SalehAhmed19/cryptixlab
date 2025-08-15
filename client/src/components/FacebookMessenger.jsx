import { CustomChat, FacebookProvider } from "react-facebook";

function FacebookMessenger() {
  return (
    <FacebookProvider appId="1658082028188240" chatSupport>
      <CustomChat pageId="100316586140481" minimized={false} />
    </FacebookProvider>
  );
}

export default FacebookMessenger;
