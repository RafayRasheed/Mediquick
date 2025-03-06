import { auth, firestore } from "../Auth/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { storeRedux } from "../redux/store";
import { setCategories, setProducts } from "../redux/data_reducer";
import { dark } from "@mui/material/styles/createPalette";

export const FirestoreReference = {
  Categories: collection(firestore, "Categories"),
  Products: collection(firestore, "Products"),
};

export async function updateDataToDB(db, id, data) {
  try {
    await FirestoreReference[db]?.doc(id.toString()).update(data);

    console.log("✅", db, "Upadated Successfully", id);

    return true;
  } catch (error) {
    // storeRedux.dispatch(setCategories(data));

    console.error("error on updating", db, error);
    return "Internal Error";
  }
}
export async function addDataToDB(db, id, data) {
  try {
    await FirestoreReference[db]?.doc(id.toString()).set(data);

    console.log("✅", db, "Add Successfully", id);
    await getProductsFromDB();
    return true;
  } catch (error) {
    // storeRedux.dispatch(setCategories(data));

    console.error("error on adding", db, error);
    return "Internal Error";
  }
}
function formatCategories(categories) {
  const { Parent = [], Sub = [] } = categories;
  const updatedParent = Parent.slice(0, 6).map((cat) => ({
    ...cat,
    subCategories: Sub.filter((sub) => sub.parentId === cat.id),
  }));
  return updatedParent;
}
export async function getCategoriesFromDB() {
  let data = { Parent: [], Sub: [] };

  try {
    const categoryDoc = doc(firestore, "Categories", "1");
    const docSnap = await getDoc(categoryDoc);

    if (docSnap.exists()) {
      data = docSnap.data();
      data = formatCategories(data);
    }

    storeRedux.dispatch(setCategories([...data, ...data]));
    console.log("✅ Categories fetched successfully:", data);
    return data;
  } catch (error) {
    // storeRedux.dispatch(setCategories(data));

    console.error("Categories on get error", error);
    return false;
  }
}

export async function getProductsFromDB() {
  let data = [];

  try {
    const productsRef = collection(firestore, "Products");
    const q = query(productsRef, where("active", "==", true)); // Fetch only active products

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    storeRedux.dispatch(setProducts(data));
    console.log("✅ Products fetched successfully:", data.length);
    return data;
  } catch (error) {
    // storeRedux.dispatch(setCategories(data));

    console.error("Products on get error", error);
    return false;
  }
}
export async function getDashboardAllData() {
  const categories = await getCategoriesFromDB();
  const products = await getProductsFromDB();
  return categories && products ? true : false;
}
export function verificationCode() {
  return Math.floor(Math.random() * 899999 + 100000);
}

export function encodeInfo(info) {
  return Base64.encode(info);
}

export function deccodeInfo(encode) {
  return Base64.decode(encode);
}

export function dataFullData() {
  const date = new Date();

  const year = adjustSting(date.getUTCFullYear().toString(), 2);
  const month = adjustSting((date.getUTCMonth() + 1).toString(), 2);
  const day = adjustSting(date.getUTCDate().toString(), 2);
  const hours = adjustSting(date.getUTCHours().toString(), 2);
  const minutes = adjustSting(date.getUTCMinutes().toString(), 2);
  const seconds = adjustSting(date.getUTCSeconds().toString(), 2);
  const mili = adjustSting(date.getUTCMilliseconds().toString(), 3);
  const extra = verificationCode().toString().slice(0, 1);
  const code = year + month + day + hours + minutes + seconds + mili + extra;
  const smallCode =
    hours +
    minutes +
    seconds +
    mili +
    verificationCode().toString().slice(0, 2);

  const hoursN = adjustSting(date.getHours().toString(), 2);
  const minutesN = adjustSting(date.getMinutes().toString(), 2);
  const dateData = {
    date: day + "-" + month + "-" + year,
    time: hoursN + ":" + minutesN,
    dateInt: parseInt(code),
    actualDate: date.toString(),
    smallCode,
  };
  return dateData;
}

export function statusDate(YDate, time) {
  const today = new Date();
  const todayDate = today.toLocaleDateString();
  const yesterday = new Date(today - 86400000);
  var yesterdayDate = yesterday.toLocaleDateString();
  if (todayDate == YDate) {
    return time ? time : "Today";
  } else if (yesterdayDate == YDate) {
    return "Yesterday";
  } else {
    return YDate;
  }
}

export function containString(contain, thiss) {
  return contain.toLowerCase().includes(thiss.toLowerCase());
}
