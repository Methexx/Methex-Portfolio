const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto max-w-5x1 px-4">
        <div className="footer-content">
          <p className="footer-text">Copyright © 2025, Developed by Methum Pathirana</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          z-index: 10;
          padding: 2rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
        }

        .footer-text {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.9rem;
          font-weight: 300;
          user-select: none;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
