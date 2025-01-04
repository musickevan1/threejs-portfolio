import SectionTransition from './ui/SectionTransition';

const ContactSection = () => (
  <SectionTransition>
    <div className="space-y-4 sm:space-y-6 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-display font-bold text-matrix-500">Contact</h2>
      <form className="space-y-4 max-w-lg" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            aria-label="Email Address"
            className="w-full p-2 bg-matrix-900/50 rounded border border-matrix-500/30 text-matrix-500 focus:border-matrix-400 focus:ring focus:ring-matrix-400/20"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            aria-label="Message"
            rows={4}
            className="w-full p-2 bg-matrix-900/50 rounded border border-matrix-500/30 text-matrix-500 focus:border-matrix-400 focus:ring focus:ring-matrix-400/20"
            required
          />
        </div>
        <button 
          type="submit"
          className="w-full sm:w-auto px-6 py-2 bg-matrix-500 text-matrix-950 rounded hover:bg-matrix-400 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  </SectionTransition>
);

export default ContactSection;