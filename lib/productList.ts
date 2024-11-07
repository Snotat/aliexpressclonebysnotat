"use client"


import { RiCustomerService2Line } from "react-icons/ri";
import { IconType } from "react-icons";
import { PiDressBold } from "react-icons/pi";
import { BsCup } from "react-icons/bs";
import { GiLipstick } from "react-icons/gi";
import { PiClipboardTextLight } from "react-icons/pi";
import { TbShoe } from "react-icons/tb";
import { LiaIndustrySolid } from "react-icons/lia";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { HiOutlineTruck } from "react-icons/hi2";
import { PiSprayBottleLight } from "react-icons/pi";
import { GrGift } from "react-icons/gr";
import { PiSolarPanel } from "react-icons/pi";
import { GoPlug } from "react-icons/go";
import { PiTractor } from "react-icons/pi";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { HiOutlineBeaker } from "react-icons/hi2";
import { PiHardHat } from "react-icons/pi";
import { LuScroll } from "react-icons/lu";
import { GiProtectionGlasses } from "react-icons/gi";
import { PiTrolleySuitcase } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { PiPlant } from "react-icons/pi";
import { GrGrow } from "react-icons/gr";
import { CiDumbbell } from "react-icons/ci";
import { TfiHeadphone } from "react-icons/tfi";
import { PiBaby } from "react-icons/pi";
import { PiPackage } from "react-icons/pi";
import { SlDiamond } from "react-icons/sl";
import { VscTools } from "react-icons/vsc";
import { PiTelevision } from "react-icons/pi";
import { IoCarOutline } from "react-icons/io5";
import { PiWarehouse } from "react-icons/pi";
import { LiaGasPumpSolid } from "react-icons/lia";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { RiHealthBookLine } from "react-icons/ri";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { PiSyringe } from "react-icons/pi";
import { RiDrinks2Line } from "react-icons/ri";
import { PiDog } from "react-icons/pi";
import { VscBeaker } from "react-icons/vsc";
import { AiOutlineGold } from "react-icons/ai";
import { LiaWineBottleSolid } from "react-icons/lia";
import { TfiRulerPencil } from "react-icons/tfi";
import { MdOutlineElectricMeter } from "react-icons/md";
export interface ProductList {
    text: string
    icon: IconType;
}

let productList: ProductList[]

export default productList = [
    {
        text: "Business Services",
        icon: RiCustomerService2Line
    },
    {
        text: "Apparel & Accessories",
        icon: PiDressBold
    },
    {
        text: "Home & Garden",
        icon: BsCup
    },
    {
        text: "Beauty",
        icon: GiLipstick
    },
    {
        text: "Commercial Equipment & Machinery",
        icon: PiClipboardTextLight
    },
    {
        text: "Shoe & Accessories",
        icon: TbShoe
    },
    {
        text: "Industrial Machinery",
        icon: LiaIndustrySolid
    },
    {
        text: "Furniture",
        icon: RiArchiveDrawerLine
    },
    {
        text: "Luggage, Bags & Cases",
        icon: HiOutlineTruck
    },
    {
        text: "Vehicles & Transportation",
        icon: RiCustomerService2Line
    },
    {
        text: "Personal Care & Household Cleaning",
        icon: PiSprayBottleLight
    },
    {
        text: "Gifts & Crafts",
        icon: GrGift
    },
    {
        text: "Renewable Energy",
        icon: PiSolarPanel
    },
    {
        text: "Electrical Equipment & Supplies",
        icon: GoPlug
    },
    {
        text: "Construction & Building Machinery",
        icon: PiTractor
    },
    {
        text: "Electronic Components, Accessories & Telecommunications",
        icon: HiOutlineCpuChip
    },
    {
        text: "Chemicals",
        icon: HiOutlineBeaker
    },
    {
        text: "Security",
        icon: PiHardHat
    },
    {
        text: "Fabric & Textile Raw Material",
        icon: LuScroll
    },
    {
        text: "Safety",
        icon: GiProtectionGlasses
    },
    {
        text: "Material Handling",
        icon: PiTrolleySuitcase
    },
    {
        text: "Buyer's Logistic Services Market",
        icon: FaRegStar
    },
    {
        text: "Agriculture",
        icon: GrGrow
    },
    {
        text: "Environment",
        icon: PiPlant
    },
    {
        text: "Consumer Electronics",
        icon: TfiHeadphone
    },
    {
        text: "Sports & Entertainment",
        icon: CiDumbbell
    },
    {
        text: "Mother, Kids & Toys",
        icon: PiBaby
    },
    {
        text: "Packaging & Printing",
        icon: PiPackage
    },
    {
        text: "Jewelry, Eyewear, Watches & Accessories",
        icon: SlDiamond
    },
    {
        text: "Vehicle Parts & Accessories",
        icon: IoCarOutline
    },
    {
        text: "Tools & Hardware",
        icon: VscTools
    },
    {
        text: "Home Appliances",
        icon: PiTelevision
    },
    {
        text: "Construction & Real Estates",
        icon: PiWarehouse
    },
    {
        text: "Vehicle Accessories, Electronics & Tools",
        icon: LiaGasPumpSolid
    },
    {
        text: "Lights & Lighting",
        icon: RiLightbulbFlashLine
    },
    {
        text: "Health Care",
        icon: RiHealthBookLine
    },
    {
        text: "School & Office Supplies",
        icon: LiaPencilRulerSolid
    },
    {
        text: "Medical devices & Supplies",
        icon: PiSyringe
    },
    {
        text: "Food & Beverage",
        icon: RiDrinks2Line
    },
    {
        text: "Pet Supplies",
        icon: PiDog
    },
    {
        text: "Testing Instrument and Equipment",
        icon: VscBeaker
    },
    {
        text: "Metals & Alloys",
        icon: AiOutlineGold
    },
    {
        text: "Rubbers & Plastics",
        icon: LiaWineBottleSolid
    },
    {
        text: "Power Transmission",
        icon: MdOutlineElectricMeter
    },
    {
        text: "Fabrication Services",
        icon: TfiRulerPencil
    }
]