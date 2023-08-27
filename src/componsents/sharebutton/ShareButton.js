import React from "react";
import { shareTwitter, shareWhatsapp, shareReddit } from "../../utils";

export const ShareButton = ({ social, icon, quote }) => {
  const handleShareButtonClick = () => {
    let url = "";

    switch (social) {
      case "twitter":
        url = shareTwitter(quote);
        break;
      case "whatsapp":
        url = shareWhatsapp(quote);
        break;
      case "reddit":
        url = shareReddit(quote);
        break;
      default:
        break;
    }

    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleShareButtonClick}
      className={`btns-social ${social}`}
    >
      {icon}
    </button>
  );
};
