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
