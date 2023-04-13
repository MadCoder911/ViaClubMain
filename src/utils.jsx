export const handleClick = (platform) => {
  let url = "via.com";
  if (platform === "linkedin") {
    url = "https://www.linkedin.com/company/via-club-cu/";
  }
  if (platform === "instagram") {
    url = "https://www.instagram.com/via.club/?hl=en";
  }
  if (platform === "facebook") {
    url = "https://www.facebook.com/VIAStudentsClub/";
  }
  if (platform === "tiktok") {
    url = "https://www.tiktok.com/@via.club?is_from_webapp=1&sender_device=pc";
  }
  if (platform === "youtube") {
    url = "youtube.com";
  }
  window.location.replace(url);
};
export const variantsCont = {
  offscreen: {
    y: 200,
  },
  show: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
  // onscreen: {
  //   y: 0,
  //   delayChildren: 0.5,
  //   transition: {
  //     type: "spring",
  //     bounce: 0.4,
  //     duration: 0.8,
  //     delayChildren: 0.5,
  //   },
  // },
};
export const children = {
  offscreen: { opacity: 0 },
  show: { opacity: 1 },
};
