import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { get } from "../utils/httpclient";
import Link from "next/link";
import { FilledButton } from "../components/customButton";
export default function Landing({data}) {
  const {author,download_url}=data;
  return (
    <>
      <Head>
        <title>صفحه نخست</title>
        <meta name="description" content="ساحل پرتو پرتقال" />
      </Head>
      <Layout>
      
        <Box
          sx={{
            position: "absolute",
            width: "956px",
            height: "517px",
            left: "98px",
            top: "58px",
            background:
              " linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.77) 100%)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <Image
            src={download_url}
            alt={author}
            width={956}
            height={517}
            layout="responsive"
          />
        <Typography
            variant="h1"
            sx={{
              position: "absolute",
              width: "296px",
              height: "63px",
              left: "330px",
              top: "408px",
              color:"#FFFFFF"
            }}
          >سواحل پرتو پرتقال</Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "956px",
            height: "115px",
            left: "98px",
            top: "599px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "23px",
            textAlign: "right",
            color: "#505050",
          }}
        >
          <Typography
            variant="body2"
            component="p"
            sx={{ color: "text.primary" }}
          >
            شهر آرکوزلو یک حومه مسکونی ممتاز پورتو است که از بسیاری جهات دارای
            زمین گلف 9 سوراخ معروف ، ویلاهای مجلل و عمارت است. خود میرامار به
            عنوان مقصدی برای تعطیلات عمومی در نظر گرفته می شود که پرتغالی ها از
            مناطق همسایه آن را دوست دارند. با این حال ، این ساحل هنوز به عنوان
            یک مقصد گردشگری بین المللی چندان مشهور نشده است ، که به
            بازدیدکنندگانش مکانی برای لذت بردن می دهد.
          </Typography>
        </Box>
<Link href={"/aboutus"}>
<FilledButton
          sx={{
            position: "absolute",
            left: "490px",
            top: "778px",     
          }}
        >
          {" "}
          <Box
            sx={{  marginLeft: "5.33px" }}
          >
            درباره ما
          </Box>
          <ArrowCircleLeftIcon/>
</FilledButton>
</Link>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data=await get("https://picsum.photos/id/44/info");
  return {
    props: {
      data
    },
  };
}
