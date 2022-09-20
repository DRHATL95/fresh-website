import { tw } from "twind";

export default function Navbar() {
  return (
    <nav>
      <div class={tw`mx-auto max-w-screen-xl`}>
        <div class={tw`container flex items-center justify-between`}>
          <a href="/" class={tw`mr-4 py-1.5 font-normal`}>
            Website (beta)
          </a>
          <ul class={tw`flex items-center gap-6`}>
            <li>
              <a href="/showdown" class={tw`flex items-center`}>
                Showdown
              </a>
            </li>
            <li>
              <a href="/contact" class={tw`flex items-center`}>
                Contact
              </a>
            </li>
            <li>
              <a href="/about" class={tw`flex items-center`}>
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
