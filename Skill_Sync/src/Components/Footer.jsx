import Logo from "./Logo.jsx";
const Footer = () => {
  const socials = [
    {
      icon: "fa fa-youtube-play text-[red]",
      link: "https://youtube.com",
    },
    {
      icon: "fa fa-linkedin-square text-[#1506AA]",
      link: "https://linkedin.com",
    },
    {
      icon: "fa fa-facebook-square text-[#5748EC]",
      link: "https//facebook.com",
    },
  ];
  const menus = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Courses",
      path: "/courses",
    },
    {
      label: "Contact Us",
      path: "/contact-us",
    },
    {
      label: "Sign up",
      path: "/register",
    },
    {
      label: "Login",
      path: "/login",
    },
  ];
  const youtubes = [
    {
      label: "Python tutorial for beginners in hindi",
      link: "",
    },
    {
      label: "Host Php Mysql website on Aws Cloud Ec2 in hindi",
      link: "",
    },
    {
      label: "Can i get jobs after reading c and c++",
      link: "",
    },
  ];
  const devtools = [
    {
      label: "Hosting checker",
      link: "",
    },
    {
      label: "Dns checker",
      link: "",
    },
    {
      label: "Stackoverflow",
      link: "",
    },
    {
      label: "Secret key generator",
      link: "",
    },
    {
      label: "Coding solutions",
      link: "",
    },
  ];
  return (
    <div>
      <footer className="border-t-2 bg-slate-50">
        <div className="grid md:grid-cols-4 md:mx-8 mx-4">
          <div className="flex flex-col gap-4 p-4">
            <Logo />
            <div className="flex items-center gap-4 ml-[25px]">
              <button className="w-[40px] h-[40px] bg-[#F7E8F6] rounded-full text-lg">
                <i className="fa fa-phone text-[red]"></i>
              </button>
              <span>+92123456789</span>
            </div>
            <div className="flex items-center gap-8 ml-[25px]">
              {socials.map((social, index) => (
                <button
                  key={index}
                  className="w-[40px] h-[40px] bg-[#E8EBF7] rounded-full text-xl"
                >
                  <a href={social.link}>
                    <i className={social.icon}></i>
                  </a>
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 p-4">
            <h1 className="text-lg font-semibold mt-2">Navlinks</h1>
            {menus.map((menu, index) => (
              <a href={menu.path} key={index}>
                {menu.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 p-4">
            <h1 className="text-lg font-semibold">YouTube videos</h1>
            {youtubes.map((youtube, index) => (
              <a href={youtube.link} key={index}>
                {youtube.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 p-4">
            <h1 className="text-lg font-semibold">Devtools</h1>
            {devtools.map((devtool, index) => (
              <a href={devtool.link} key={index}>
                {devtool.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
