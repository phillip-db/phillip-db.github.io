const SocialIcon = ({ icon, link }) => {
  return (
    <Button href={link} role="button" className="clean-btn">
      {icon}
    </Button>
  );
};

export default SocialIcon;
