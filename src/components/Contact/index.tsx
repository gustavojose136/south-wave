"use client";

import React from "react";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <div style={{
      backgroundColor: '#141b2d', 
      color: '#fff', 
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        
        {/* COLUNA ESQUERDA - "Information" */}
        <div style={{
          flex: '1 1 300px',
          maxWidth: '600px',
          padding: '20px'
        }}>
          {/* Caixa de título "Information" */}
          <div style={{
            backgroundColor: '#00b5e2',
            borderRadius: '5px',
            padding: '10px 15px',
            marginBottom: '20px'
          }}>
            <h2 style={{ margin: 0, fontSize: '20px' }}>Information</h2>
          </div>

          {/* Texto descritivo */}
          <p>
            Here are some of the ports in Brazil where Sea Star can provide supplies. 
            If your preferred port is not listed, please contact us for more information 
            on pricing and the feasibility of delivery:
          </p>

          {/* Lista de portos */}
          <p style={{ lineHeight: '1.6' }}>
            Santos • São Sebastião • Rio de Janeiro<br/>
            Vitória • Paranaguá • Itajaí • São Francisco do Sul • Imbituba<br/>
            Rio Grande do Sul • Porto Alegre<br/>
            Aratu • Fronape • Port of Ponta da Madeira • Alumar • Itaqui<br/>
            Maceió • Recife
          </p>

          {/* Contato telefônico */}
          <p style={{ fontWeight: 'bold' }}>
            +55 (13) 3500-6918 | +55 (13) 3229-5757 &nbsp;
            <span style={{ fontWeight: 'normal' }}>tap or click to call</span>
          </p>

          {/* Endereço */}
          <p>
            HQ - Tv. Donâ Adelina, 35<br/>
            Paquetá, Santos - SP, 11013-130 - Brazil
          </p>

          {/* E-mail */}
          <p>seastar@seastarbrazil.com</p>
        </div>

        {/* COLUNA DIREITA - Formulário */}
        <div style={{
          flex: '1 1 300px',
          maxWidth: '600px',
          padding: '20px',
          backgroundColor: '#f0f0f0',
          color: '#000',
          borderRadius: '5px'
        }}>
          <h2 style={{ marginTop: 0 }}>Need a Quote or additional information?</h2>
          <p>Send us a message and we will reach back to you.</p>

          {/* Formulário de contato */}
          <form>
            {/* E-mail */}
            <div style={{ marginBottom: '15px' }}>
              <label 
                htmlFor="email" 
                style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
              >
                Email*
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ccc'
                }}
              />
            </div>

            {/* Country Code */}
            <div style={{ marginBottom: '15px' }}>
              <label 
                htmlFor="countryCode" 
                style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
              >
                Country Code
              </label>
              <input 
                type="text" 
                id="countryCode" 
                name="countryCode"
                defaultValue="BR +55"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ccc'
                }}
              />
            </div>

            {/* Company or Vessel Name */}
            <div style={{ marginBottom: '15px' }}>
              <label 
                htmlFor="companyName" 
                style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
              >
                Company or Vessel Name
              </label>
              <input 
                type="text" 
                id="companyName" 
                name="companyName"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ccc'
                }}
              />
            </div>

            {/* Mensagem */}
            <div style={{ marginBottom: '15px' }}>
              <label 
                htmlFor="message" 
                style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
              >
                Your Message or inquire here
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows="4"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ccc'
                }}
              />
            </div>

            {/* Botão de envio */}
            <button 
              type="submit"
              style={{
                backgroundColor: '#00b5e2',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
