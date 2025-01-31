"use client";

import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative
        py-20
        md:py-[120px]
        min-h-[650px]
        overflow-hidden
      "
    >
      {/* IMAGEM DE FUNDO (opcional) */}
      <img
        src="/images/fundos/fundo-porto.jpg"
        alt="Fundo Porto"
        className="
          absolute
          inset-0
          -z-[2]
          h-full
          w-full
          object-cover
        "
      />

      {/* OVERLAY ESCURO */}
      <div
        className="
          absolute
          inset-0
          -z-[1]
          bg-gradient-to-b
          from-[#18216d]/80
          to-[#0d123a]/90
        "
      />

      <div className="container px-4">
        <div
          className="
            -mx-4
            flex
            flex-wrap
            items-center
            justify-center
          "
        >
          {/* COLUNA DE ENDEREÇO / LOCALIZAÇÃO */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <span className="mb-6 block text-base font-medium text-white">
                  CONTATO
                </span>
                <h2 className="max-w-[360px] text-[35px] font-semibold leading-tight text-white md:text-4xl">
                  Vamos conversar sobre suas necessidades.
                </h2>
              </div>

              <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    {/* Ícone de Localização */}
                    <svg
                      width="29"
                      height="35"
                      viewBox="0 0 29 35"
                      className="fill-current"
                    >
                      <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z" />
                      <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-[18px] text-lg font-semibold text-white">
                      Nossa Localização
                    </h3>
                    {/* MAPA RESPONSIVO */}
                    <div className="relative w-full h-[200px] sm:h-[300px] overflow-hidden rounded-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29929.01396592672!2d-40.386485!3d-20.336382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83eaa0dadd491%3A0xd51cb1d9fa53c01b!2sR.%20Waldemar%20Siepierski%2C%20200%20-%20Rio%20Branco%2C%20Cariacica%20-%20ES%2C%2029147-600%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1737487808021!5m2!1spt-BR!2sus"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    {/* Ícone de Email / Contato */}
                    <svg
                      width="34"
                      height="25"
                      viewBox="0 0 34 25"
                      className="fill-current"
                    >
                      <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-[18px] text-lg font-semibold text-white">
                      Como podemos ajudar?
                    </h3>
                    <p className="mt-1 text-base text-gray-200">
                      comercial@galatasservicos.com
                    </p>
                    <p className="mt-1 text-base text-gray-200">
                      Telefone: (27) 3073-4740
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FORMULÁRIO */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div
              className="
                wow fadeInUp
                rounded-lg
                bg-white
                px-8
                py-10
                shadow-testimonial
                sm:px-10
                sm:py-12
                md:p-[60px]
                lg:p-10
                lg:px-10
                lg:py-12
                2xl:p-[60px]
              "
              data-wow-delay=".2s"
            >
              <h3 className="mb-8 text-2xl font-semibold text-dark md:text-[28px] md:leading-[1.42]">
                Envie-nos uma Mensagem
              </h3>
              <form>
                <div className="mb-[22px]">
                  <label
                    htmlFor="fullName"
                    className="mb-4 block text-sm text-body-color"
                  >
                    Nome Completo*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Seu Nome"
                    className="
                      w-full
                      border-0
                      border-b
                      border-[#f1f1f1]
                      bg-transparent
                      pb-3
                      text-dark
                      placeholder:text-body-color/60
                      focus:border-primary
                      focus:outline-none
                    "
                  />
                </div>
                <div className="mb-[22px]">
                  <label
                    htmlFor="email"
                    className="mb-4 block text-sm text-body-color"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="seuemail@dominio.com"
                    className="
                      w-full
                      border-0
                      border-b
                      border-[#f1f1f1]
                      bg-transparent
                      pb-3
                      text-dark
                      placeholder:text-body-color/60
                      focus:border-primary
                      focus:outline-none
                    "
                  />
                </div>
                <div className="mb-[22px]">
                  <label
                    htmlFor="phone"
                    className="mb-4 block text-sm text-body-color"
                  >
                    Telefone*
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="(27) 99999-9999"
                    className="
                      w-full
                      border-0
                      border-b
                      border-[#f1f1f1]
                      bg-transparent
                      pb-3
                      text-dark
                      placeholder:text-body-color/60
                      focus:border-primary
                      focus:outline-none
                    "
                  />
                </div>
                <div className="mb-[30px]">
                  <label
                    htmlFor="message"
                    className="mb-4 block text-sm text-body-color"
                  >
                    Mensagem*
                  </label>
                  <textarea
                    name="message"
                    rows={1}
                    placeholder="Escreva sua mensagem aqui"
                    className="
                      w-full
                      resize-none
                      border-0
                      border-b
                      border-[#f1f1f1]
                      bg-transparent
                      pb-3
                      text-dark
                      placeholder:text-body-color/60
                      focus:border-primary
                      focus:outline-none
                    "
                  ></textarea>
                </div>
                <div className="mb-0">
                  <button
                    type="submit"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      rounded-md
                      bg-primary
                      px-10
                      py-3
                      text-base
                      font-medium
                      text-white
                      transition
                      duration-300
                      ease-in-out
                      hover:bg-primary/90
                    "
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
