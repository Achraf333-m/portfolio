import "@/styles/globals.css"
import Link from "next/link"

function Contact() {
  return (
    <section className="h-screen">
        <header className="flex justify-between max-w-5xl mx-auto py-20">
            <Link href="/"> 
            logo - AD
            </Link>
            <Link href="/">
            go home
            </Link>
        </header>
    <form className="flex flex-col space-y-8 pt-44 max-w-4xl mx-auto">
        <label>Email</label>
        <input type="text" name="email" placeholder="email" />

        <label>Message</label>
        <input type="text" name="email" placeholder="I think i'd enjoy working with you, let me know when you're available for an interview!" />
        <button type="submit">
            Send it my way!
        </button>
    </form>

    </section>
  )
}

export default Contact