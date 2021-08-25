// import Link from "next/link";
// import Image from "next/image";
// import styles from "@/styles/Eventitem.module.scss";

// export default function Eventitem({ evt }) {
//   return (
//     <div className={styles.event}>
//       <div className={styles.img}>
//         {/* if evt.image is true, show evt.image .otherwise show default png   ? = if first is true     := else */}
//         <Image
//           src={
//             evt.image
//               ? evt.image.formats.thumbnail.url
//               : "/image/event-default.png"
//           }
//           width={170}
//           height={100}
//         />
//       </div>
//       <div className={styles.info}>
//         <span>
//           {new Date(evt.date).toLocaleDateString("zh-HK")} at {evt.time}
//         </span>
//         <h3>{evt.name}</h3>
//       </div>
//       <div className={styles.link}>
//         <Link href={`/events/${evt.slug}`}>
//           <a className="btn">Details</a>
//         </Link>
//       </div>
//     </div>
//   );
// }
// ----------------------------------------------------------------------------

// import Link from "next/link";
// import Image from "next/image";
// import styles from "@/styles/Eventitem.module.scss";
// import { API_URL } from "../config/index";

// export default function Eventitem({ evt }) {
//   return (
//     <div className={styles.img}>
//       {/* if evt.image is true, show evt.image .otherwise show default png   ? = if first is true     := else */}
//       {/* <Link href={`/articles/${evt.slug}`}>
//         <a>
//           <Image
//             src={
//               evt.picture
//                 ? `${API_URL}`${evt.image.url}`
//                 : "/image/event-default.png"
//             }
//             width={200}
//             height={300}
//           />
//         </a>
//       </Link> */}

//       <Link href={`/articles/${evt.slug}`}>
//         <a>
//           <Image
//             // src="https://strapi-it-blog.herokuapp.com/uploads/3_7c17a78777.png"
//             // src={`${API_URL}${evt.image.url}`}
//             src={evt.image.url}
//             width={600}
//             height={300}
//           />
//         </a>
//       </Link>
//       <div className={styles.info}>
//         <span>{evt.title}</span>
//         <br />

//         {/* <span>{`https://strapi-it-blog.herokuapp.com${evt.image.url}`}</span> */}
//       </div>
//     </div>
//   );
// }

// --------------------------------------------------------

// import Link from "next/link";
// import Image from "next/image";
// import styles from "@/styles/Eventitem.module.scss";
// import { API_URL } from "../config/index";

// export default function Eventitem({ evt }) {
//   return (
//     <div className="flex items-center justify-center text-center">
//       <Link href={`/articles/${evt.slug}`}>
//         <a>
//           <Image src={evt.image.url} width={600} height={300} />
//         </a>
//       </Link>
//       <div className={styles.info}>
//         <p>{evt.title}</p>
//         <br />
//       </div>
//     </div>
//   );
// }

// -------------------------------------------------------------------------

import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Eventitem.module.scss";
import CategoryLabel from "./CategoryLabel";

export default function Eventitem({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Link href={`/articles/${evt.slug}`}>
          <a>
            <Image
              src={evt.image ? evt.image.url : "/image/event-default.png"}
              width={670}
              height={400}
              alt={evt.image.name}
            />
          </a>
        </Link>
      </div>
      <div className={styles.info}>
        <span className={styles.publishedTime}>
          <p>{new Date(evt.date).toLocaleDateString("zh-HK")} update</p>
        </span>
        <span>
          <p className={styles.cardtitle}>{evt.title}</p>
        </span>
        {/* <span className="w-full text-right inline-block">
          <Link href={`/category/${evt.category.slug}`}>
            <a className={styles.btnCategory}>{evt.category.name}</a>
          </Link>
        </span> */}
        <span className="w-full text-right inline-block">
          <CategoryLabel>{evt.category.slug}</CategoryLabel>
        </span>
      </div>
    </div>
  );
}
