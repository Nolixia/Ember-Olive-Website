import Link from "next/link";
import { dishes } from "./restaurant-data";

export default function Home() {
  return <>
    <section className="hero"><div className="heroShade"/><div className="shell heroContent"><span className="eyebrow light">Mediterranean dining · Birmingham</span><h1>A table worth<br/>remembering.</h1><p>Season-led Mediterranean plates, genuine hospitality and a room made for lingering.</p><div className="actions"><Link className="button" href="/reserve">Book a table</Link><Link className="button ghost" href="/menu">Explore the menu</Link></div></div><div className="heroMeta"><span>Colmore Row, Birmingham</span><span>Tue–Sun · Lunch & dinner</span><span>Private dining available</span></div></section>
    <section className="section shell"><div className="sectionHead"><div><span className="eyebrow">From our kitchen</span><h2>Signature dishes</h2></div><Link className="textLink" href="/menu">View the full menu →</Link></div><div className="dishGrid">{dishes.slice(0,4).map((dish,index)=><Link href={`/menu/${dish.slug}`} className="dishCard" key={dish.slug}><div className={`dishPhoto food-${index+1}`}><span>{dish.tag}</span></div><div className="dishInfo"><div><h3>{dish.name}</h3><p>{dish.description}</p></div><b>£{dish.price}</b></div></Link>)}</div></section>
    <section className="storySplit"><div className="storyImage"/><div className="storyCopy"><span className="eyebrow">Our story</span><h2>Rooted in tradition.<br/>Inspired by the Mediterranean.</h2><p>Ember & Olive is a celebration of honest ingredients, warm hospitality and the joy of gathering. Our kitchen follows the seasons, working with British producers and Mediterranean flavours.</p><Link className="button dark" href="/story">Discover our story</Link></div></section>
    <section className="reserveBand"><div className="shell"><span className="eyebrow light">Your table is waiting</span><h2>Make an evening of it.</h2><p>Choose your date, see live availability and reserve your favourite table or private room.</p><Link className="button cream" href="/reserve">Check availability</Link></div></section>
  </>;
}
