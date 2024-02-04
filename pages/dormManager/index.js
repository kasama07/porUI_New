import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Space from "@/components/SpaceTab";
import styles from "./dorm.module.css";
import Link from "next/link";

const getInfomation = async() => {
  res   = await fetch("http://localhost:3000/api/getDormManagement",{
    cache:"no-store",
  });
  return res.json();
}
const getDors = async () => {
    const res = await fetch("http://localhost:3000/api/getDors", {
      cache: "no-store",
    });
    return res.json();
};
export default function IDroom(){
  return(
    <div className={styles.body}>
        <Navbar/>
        <div className={styles.container}>
            <div className={styles.Boxgrid}>
                <Link href= "/dormManager/addRoom" className={styles.Box1}>
                    <img className={styles.icon} src="/addroom.png" width={100} height={100}></img>
                    <img className={styles.iconarrowbottom1} src="/circle.png" width={20} height={20}></img>
                    <div className={styles.Text}>เพิ่มห้อง</div>
                </Link>
                <Link href= "/dormManager/check" className={styles.Box2}>
                    <img className={styles.icon} src="/checkview.png" width={100} height={100}></img>
                    <img className={styles.iconarrowbottom2} src="/circle.png" width={20} height={20}></img>
                    <div className={styles.Text}>ตรวจสอบ</div>
                </Link>
            </div>
            <div className={styles.Box}>
                <Link href="/dormManager/manageRoom" className={styles.Box3}>
                    <img className={styles.iconarrowbottom4} src="/circle.png" width={20} height={20}></img>
                    <img className={styles.iconarrowbottom3} src="/edit.png" width={100} height={100}></img>
                    <div className={styles.Textbox}>แก้ไข</div>
                </Link>
            </div>
        </div>
        <Footer/>
    </div>
)
}