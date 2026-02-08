const Footer = () => {
  return (
    <div className="mt-32 py-6 border-t border-zinc-800 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portfolio.</h1>

      <div className="flex items-center gap-5 text-zinc-400">
        {/* GitHub */}
        <a
          href="https://github.com/farhanfrmnd"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <i className="ri-github-fill ri-2x"></i>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/muhammadfarhanfarmanda/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=farhanfarmanda6@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
          title="Send Email"
        >
          <i className="ri-mail-fill ri-2x"></i>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/farhanfrmndz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <i className="ri-instagram-fill ri-2x"></i>
        </a>

        {/* Whatsapp */}
        <a
          href="https://wa.me/85156413209"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <i className="ri-phone-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
