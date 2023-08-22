import { forwardRef } from "react"
import "./SecondPage.style.css"


// eslint-disable-next-line react/prop-types
const SecondPage  = forwardRef(function SecondPage({visible}, ref) {
return(
    <main className="second-page">
        <div className="about-us">
          <div  className={`hidden about-us-container one-section ${visible}`}>
            <h1 className="big-tittles">| Tittle |</h1>
            <p className="text-about">Whether you need high quality imagery, a compelling story or marketing strategy – we’ve got you covered. What about a mountain location with perfect conditions that cannot be imitated, regardless of its whereabouts? No problem. All this while hosting world-class athletes or talent? Of course.</p>
          </div>
          <div ref={ref} className={`hidden about-us-container two-section ${visible}`}>
          <h1 className="big-tittles">| Tittle |</h1>
            <p className="text-about">Whether you need high quality imagery, a compelling story or marketing strategy – we’ve got you covered. What about a mountain location with perfect conditions that cannot be imitated, regardless of its whereabouts? No problem. All this while hosting world-class athletes or talent? Of course.</p>
          </div>
          <div  className={`hidden about-us-container three-section ${visible}`}>  <h1 className="big-tittles">| Tittle |</h1>
            <p className="text-about">Whether you need high quality imagery, a compelling story or marketing strategy – we’ve got you covered. What about a mountain location with perfect conditions that cannot be imitated, regardless of its whereabouts? No problem. All this while hosting world-class athletes or talent? Of course.</p></div>
        </div>
      </main>
)
})


export default SecondPage