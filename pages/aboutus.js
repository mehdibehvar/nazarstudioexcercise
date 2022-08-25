import { Box, Button, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { get } from '../utils/httpclient'
import Link from 'next/link'
import { OutlinedButton } from '../components/customButton'
export default function AboutUs() {
    const [imageUrl,setImageUrl] = useState("")
    useEffect(() => {
      setTimeout(() => {
        get("https://picsum.photos/id/1/info").then(response=>setImageUrl(response.download_url));
      }, 2000);
      
    },[])
    
  return (
   <>
    <Head>
    <title>درباره ما</title>
     <meta name="description" content="ساحل پرتو درباره"/>
    </Head>
    <Layout>
<Box sx={{
     position:"absolute",
     width: "461px",
     height: "517px",
     left: "593px",
     top: "170px",
     border: "0.2px solid #aeaeae",
     borderRadius: "98px",
     overflow:"hidden"}}>
{imageUrl?<Image
src={imageUrl}
alt="cat"
width={461}
height={517}
layout="responsive"
/>:null}
</Box>
<Box sx={{position:"absolute",left:"68px",top:"286px",width:"499px",height:"288px"}}>
<Typography variant='h2' sx={{textAlign:"center",marginBottom:"28px",color:"text.secondary"}}>درباره ما</Typography>
<Typography variant='body1' sx={{textAlign:"justify",color:"text.primary"}}>نکته مهمی که در بیشتر سایتهای ایرانی توجهی به آن نمیشود طراحی صفحه درباره ما یا همان About Us است. اکثر افراد در این بخش مطالبی طولانی و خسته کننده برای کاربر و یا نوشته ای کوتاه و ناقص قرار میدهند که میتواند اعتبار سایت یا شرکت شما را زیر سوال ببرد.</Typography>
</Box>
   <Link href={"/"}>
   <OutlinedButton
          sx={{
            position: "absolute",
            left: "490px",
            top: "778px",
          }}
        >
           <ArrowCircleRightIcon />
          {" "}
          <Box
            sx={{ marginRight: "5.33px" }}
          >
            <Typography variant='button' component="p">

          صفحه اصلی
            </Typography>
          </Box>        
   </OutlinedButton>
   </Link>
    </Layout>
   </>
  )
}
