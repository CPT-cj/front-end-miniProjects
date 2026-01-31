import "./Services.css";
function Services() {
  return (
    <div className="services_bg">
      <h1 className="title_services">Services</h1>
      <p className="services_description">
        In order to help you grow your business, our carefully selected experts
        can advise you in in the following areas:
      </p>
      <div className="container">
        <div className="service1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="size-4"
            className="pencil"
          >
            <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
            <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
          </svg>

          <h1 className="oshakhlari_title1">Web Design</h1>
          <div className="oshakhlari_description">
            Consectetur adipiscing elit. Praesent molestie urna hendrerit erat
            tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue
            dapibus porttitor at in mauris. Pellentesque commodo...
          </div>
        </div>
        <div className="service2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="size-4"
            className="code"
          >
            <path
              fill-rule="evenodd"
              d="M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z"
              clip-rule="evenodd"
            />
          </svg>

          <h1 className="oshakhlari_title2">WEB DEVELOPMENT</h1>
          <div className="oshakhlari_description">
            Consectetur adipiscing elit. Praesent molestie urna hendrerit erat
            tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue
            dapibus porttitor at in mauris. Pellentesque commodo...
          </div>
        </div>
        <div className="service3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="size-4"
            className="search"
          >
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd"
            />
          </svg>

          <h1 className="oshakhlari_title3">SEO Analisys</h1>
          <div className="oshakhlari_description">
            Consectetur adipiscing elit. Praesent molestie urna hendrerit erat
            tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue
            dapibus porttitor at in mauris. Pellentesque commodo...
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
