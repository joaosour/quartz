// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
// @ts-ignore
import openLinksScript from "./scripts/openLinks.inline.js" // ← note o .js
import clipboardStyle from "./styles/clipboard.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return <div id="quartz-body">{children}</div>
}

// Executa ambos após o DOM carregar
Body.afterDOMLoaded = clipboardScript + openLinksScript
Body.css = clipboardStyle

export default (() => Body) satisfies QuartzComponentConstructor
