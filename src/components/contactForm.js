export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <div className="input-div">
            <label>Име*</label>
            <input type="email" />
          </div>
          <div className="input-div">
            <label>Презиме*</label>
            <input type="email" />
          </div>
        </div>
        <div className="input-div">
          <label>E-mail*</label>
          <input type="email" />
        </div>
        <div className="input-div">
          <label>Телефонски број</label>
          <input type="email" />
        </div>


      </div>
      <button 
      className="button-1">
        Испрати
      </button>
    </form>
  );
}