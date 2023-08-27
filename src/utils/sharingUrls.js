export const shareTwitter = (text) => {
  return `https://twitter.com/intent/tweet?&text=${text}`;
};

export const shareWhatsapp = (text) => {
  return `https://api.whatsapp.com/send?text=${text}`;
};

export const shareReddit = (text) => {
  return `https://www.reddit.com/submit?text=${text}`;
};
