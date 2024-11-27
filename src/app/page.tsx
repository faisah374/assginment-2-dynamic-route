
import "./globals.css"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Countries List</h1>
      <h2>Click on any country button to show its data: </h2>
      <ul className="d-flex">
            <li className="cust_button"><Link className="" href="./Country/pakistan">Pakistan</Link></li>
            <li className="cust_button"><Link className="" href="./Country/india">India</Link></li>
            <li className="cust_button"><Link className="" href="./Country/japan">Japan</Link></li>


            {/* <Link href="">Pakistan</Link> */}
        </ul>
    </div>
  );
}