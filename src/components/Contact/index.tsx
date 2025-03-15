"use client"

import { Ship, Phone, Building, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#2D3339]">
      {/* Left Column - Information */}
      <div className="w-full md:w-2/5 p-6 flex flex-col gap-4">
        {/* Information Header */}
        <div className="bg-[#00A3FF] text-white text-center py-4 rounded-xl">
          <h2 className="text-2xl font-bold">Information</h2>
        </div>

        {/* Information Text */}
        <div className="text-white p-4 text-center">
          <p>
            Here are some of the ports in Brazil where South Waves can provide supplies. If your preferred port is not
            listed, please contact us via the form or phone for more information on pricing and the feasibility of your
            order.
          </p>
        </div>

        {/* Ports List */}
        <div className="bg-white text-[#2D3339] p-6 rounded-xl text-center">
          <p className="font-medium leading-relaxed">
            Santos • São Sebastião • Rio de Janeiro
            <br />
            Vitoria • Paranagua • Antonina
            <br />
            São Francisco do Sul • Imbituba
            <br />
            Rio Grande do Sul • Porto Alegre
            <br />
            Aratú • Tramandaí • Ponta da Madeira
            <br />
            Alumar • Itaqui • Maceió • Recife
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-4">
          {/* Phone Numbers */}
          <div className="bg-white text-[#2D3339] p-4 rounded-xl flex items-center">
            <div className="bg-[#00A3FF] p-3 rounded-xl mr-4">
              <Phone className="text-white h-8 w-8" />
            </div>
            <div className="text-center flex-1">
              <p className="font-medium">+55 (13) 3500-6918 / +55 (13) 3229-5757</p>
              <p className="text-sm text-gray-500">tap or click to call</p>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white text-[#2D3339] p-4 rounded-xl flex items-center">
            <div className="bg-[#00A3FF] p-3 rounded-xl mr-4">
              <Building className="text-white h-8 w-8" />
            </div>
            <div className="text-center flex-1">
              <p className="font-medium">HQ - Tv. Doná Adelina, 35</p>
              <p className="text-sm text-gray-500">Paquetá, Santos - SP, 11013-130 - Brazil</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white text-[#2D3339] p-4 rounded-xl flex items-center">
            <div className="bg-[#00A3FF] p-3 rounded-xl mr-4">
              <Mail className="text-white h-8 w-8" />
            </div>
            <div className="text-center flex-1">
              <p className="font-medium">southwaves@southwaves.com</p>
            </div>
          </div>
        </div>

        {/* Ship Icon */}
        {/* <div className="absolute top-6 left-6">
          <div className="bg-[#00A3FF] p-3 rounded-xl">
            <Ship className="text-white h-8 w-8" />
          </div>
        </div> */}
      </div>

      {/* Right Column - Contact Form */}
      <div className="w-full md:w-3/5 bg-white p-8 rounded-l-3xl">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl text-[#2D3339] mb-2">Need a Quote or additional information?</h2>
          <p className="text-gray-600 mb-8">Send as a message and we will reach back to you.</p>

          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault()
            alert("Form submitted!")
          }}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2D3339] mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full bg-[#EEF5FF] border-0 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-[#2D3339] mb-2">
                  Country Code
                </label>
                <select
                  id="country"
                  className="w-full bg-[#EEF5FF] border-0 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
                  defaultValue="BR"
                >
                  <option value="BR">BR +55</option>
                  <option value="US">US +1</option>
                  <option value="UK">UK +44</option>
                </select>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#2D3339] mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full bg-[#EEF5FF] border-0 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-[#2D3339] mb-2">
                Company or Vessel Name
              </label>
              <input
                id="company"
                type="text"
                className="w-full bg-[#EEF5FF] border-0 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[#2D3339] mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="w-full bg-[#EEF5FF] border-0 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#2D3339] mb-2">
                Your Message or Inquire <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                required
                placeholder="Type your message or inquire here"
                className="w-full bg-[#EEF5FF] border-0 rounded-lg px-4 py-3 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#00A3FF] hover:bg-[#0088D1] text-white font-medium px-12 py-3 rounded-lg transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
