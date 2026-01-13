const ContactUs = ()=>{
    return (
        <div className="contact m-2 p-2">
            <h1 className="heading text-xl font-bold pb-2"> Contact Us</h1>
            <h2 className="description text-lg">We are here for  you 😊</h2>
            <form>
                <input  placeholder="Enter name"className="name border border-black m-2 p-2"/>
                <input placeholder="message" className="mesg border border-black m-2 p-2"/>
                <button className="submit border border-black m-2 p-2 rounded-md cursor-pointer text-white bg-black"> Submit</button>
            </form>
        </div>
    )
}
export default ContactUs;