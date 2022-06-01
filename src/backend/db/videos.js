/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

import {
  thrillerThumbnailOne,
  thrillerThumbnailTwo,
  thrillerThumbnailThree,
  thrillerThumbnailFour,
  actionThumbnailOne,
  actionThumbnailTwo,
  actionThumbnailThree,
  actionThumbnailFour,
  romanceThumbnailOne,
  romanceThumbnailTwo,
  romanceThumbnailThree,
  romanceThumbnailFour,
  dramaThumbnailOne,
  dramaThumbnailTwo,
  dramaThumbnailThree,
  dramaThumbnailFour,
} from "./../../images.js";
import uuid from "react-uuid";

export const videos = [
  {
    _id: uuid(),
    thumbnail: thrillerThumbnailOne,
    source:
      "https://rr5---sn-npoe7nlz.googlevideo.com/videoplayback?expire=1654081839&ei=z_SWYs--Ka65ir4PybCWoAY&ip=64.145.93.208&id=o-ACNQxC4h7ybvtpBsnKN_qBdln4HzNeFJzFmmq8tiRfxr&itag=18&source=youtube&requiressl=yes&spc=4ocVCwY_4mYSLTDSK7_mkNLsy2h_&vprv=1&mime=video%2Fmp4&ns=xuviqOw3Lx0BNjVS_oJtLYoG&gir=yes&clen=12509167&ratebypass=yes&dur=192.214&lmt=1576400004420790&fexp=24001373,24007246&c=WEB&txp=5531432&n=BpZYjvzU-pb_CQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAJoKoP0NXfMLPVfGOdXJ3OR0l5A71RYVx2NZEH88s5flAiEA0K1IS3JWkZjhJAZfKAV2y_7Pht7e7wqBJgef7sBWiwE%3D&redirect_counter=1&cm2rm=sn-qxoss7e&req_id=483a04ad9c55a3ee&cms_redirect=yes&mh=gQ&mip=2406:7400:75:c5e4:fdd8:a8f3:9dcb:b88c&mm=34&mn=sn-npoe7nlz&ms=ltu&mt=1654059912&mv=u&mvi=5&pl=52&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAPCM8cOkmWAFlXYS0BB_Z3FfvW13slMdZhbtA9s6dJJgAiAO1RsLhdueniaxt6VoSLSx5USg6RIz1veDVlIgzFP0Yg%3D%3D",
    title: "Drishyam",
    category: "Thrillers",
  },
  {
    _id: uuid(),
    thumbnail: thrillerThumbnailTwo,
    source:
      "https://rr4---sn-npoe7nss.googlevideo.com/videoplayback?expire=1654081969&ei=UfWWYquFL4_pgAeIqIPwBA&ip=212.102.39.84&id=o-AGlbRdEQRYKPY9pqaI1P6H4gVfZl_IguQNlQbMgjUNZo&itag=18&source=youtube&requiressl=yes&spc=4ocVC410CHYY7AD9X7-L3RK8WEDK&vprv=1&mime=video%2Fmp4&ns=qgXFtGnBQQSy3GqLkIPYJvcG&gir=yes&clen=9297042&ratebypass=yes&dur=135.906&lmt=1485227688408542&fexp=24001373,24007246&c=WEB&n=xZHjPrOc_xitEw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAKQkUiyhRRb7kAzTNzBbcebKRrioe-w7p1KFcrrhM81oAiApy-CBT9AeTL_HGcCRzRBC1wF8Fzvb4x8ZIFMjC-3ARQ%3D%3D&rm=sn-n02xgoxufvg3-2gbz7r&req_id=cb23439ab6eba3ee&cmsv=e&redirect_counter=2&cm2rm=sn-2gbez76&cms_redirect=yes&mh=tf&mip=2406:7400:75:c5e4:fdd8:a8f3:9dcb:b88c&mm=34&mn=sn-npoe7nss&ms=ltu&mt=1654059912&mv=u&mvi=4&pl=52&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAJcOJuO0gJ88l463DQ1WxfLfG5JSwPuwYF1oKCyqnWHYAiBCBwx_DHjohf0x0zmJuKWNUegot91zHZYf_lGzd0YOIA%3D%3D",
    title: "Kahaani",
    category: "Thrillers",
  },
  {
    _id: uuid(),
    thumbnail: thrillerThumbnailThree,
    source:
      "https://rr2---sn-5jucgv5qc5oq-h55k.googlevideo.com/videoplayback?expire=1654082025&ei=ifWWYtHlBsOox_APwOO5gA8&ip=78.110.173.145&id=o-AK8x3pDWNgL5w_xu69G5FifJJzWLVfpDPJzn_C3SKNoA&itag=18&source=youtube&requiressl=yes&spc=4ocVC3jb7SjARn2zlKJUIm-e7VWX&vprv=1&mime=video%2Fmp4&ns=LpkaYkT2Qy4L2GyEBep2lzsG&gir=yes&clen=7290009&ratebypass=yes&dur=120.093&lmt=1575792219457254&fexp=24001373,24007246&c=WEB&txp=5531432&n=KjhxZ-uDC1aloA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgPSdOSGv4oYTq5_Ee1H-PNZG828VqSx3i6CAqyhEHkZgCIBOHWbbiqq1N-GiWLBuKJp0RFlsdN5hEA_okmYgJ7_PH&redirect_counter=1&rm=sn-aigeer7d&req_id=5ed716d3edada3ee&cms_redirect=yes&ipbypass=yes&mh=fC&mip=2406:7400:75:c5e4:fdd8:a8f3:9dcb:b88c&mm=31&mn=sn-5jucgv5qc5oq-h55k&ms=au&mt=1654060142&mv=m&mvi=2&pcm2cms=yes&pl=52&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRQIgXDs9BP0u_Q1g7QDoWOCbc13PvcfphgZxvIIKUemSdmwCIQCdF877Silnc7P0ihbyrZ6uIAmAJ-XjI7oEdzCywWSLDQ%3D%3D",
    title: "Andhadhun",
    category: "Thrillers",
  },
  {
    _id: uuid(),
    thumbnail: thrillerThumbnailFour,
    source:
      "https://rr1---sn-h557snzy.googlevideo.com/videoplayback?expire=1654082063&ei=r_WWYpC3Mq-N6dsPk7yOiAs&ip=212.102.57.216&id=o-AGgJDZNpZYb00J6c-cC2spCYCz-EM22bKhtDhbHtFY2B&itag=18&source=youtube&requiressl=yes&pcm2=yes&spc=4ocVCyui6gBd5Dfjalp9WfWzMoQR&vprv=1&mime=video%2Fmp4&ns=RBWcnQJBED2U-6OrKsG2GYYG&gir=yes&clen=7894444&ratebypass=yes&dur=146.053&lmt=1551791059993254&fexp=24001373,24007246&c=WEB&txp=5531432&n=Cw7Yg60oLm-Ohg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cpcm2%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgSwdAYTm0F3349wClHAG7-luzt19rYtFGeXz_E8tzMfICIA8sYp9sm7wphElq8qOMpixEZNWM_GDtbr_xXJW3GIQP&rm=sn-n02xgoxufvg3-2gbl7k,sn-5hness7z&req_id=56af46906193a3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=ZM&mip=2406:7400:75:c5e4:fdd8:a8f3:9dcb:b88c&mm=29&mn=sn-h557snzy&ms=rdu&mt=1654059962&mv=u&mvi=1&pl=52&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgdh3PKdq4TbSGOzldtxPDLyz_aAM0ZKS2W5URNY39Y30CIQCvbLJJfd4W3dkvOqbcJO28uiMyhMzQQgimDUCJsmBvkA%3D%3D",
    title: "Pink",
    category: "Thrillers",
  },
  {
    _id: uuid(),
    thumbnail: actionThumbnailOne,
    source:
      "https://rr1---sn-5jucgv5qc5oq-cagk.googlevideo.com/videoplayback?expire=1654081679&ei=LvSWYtatOJCCsfIPyPeE8A4&ip=45.57.191.45&id=o-ACA6WiB0LZMaSlJePBFxiaso2K1LnBlc_JaLxA0k2wqH&itag=18&source=youtube&requiressl=yes&spc=4ocVCwHgEw0c3N5QEaBXwSG4gzrp&vprv=1&mime=video%2Fmp4&ns=eOPc7UWy_AejKJvUkiz5x7sG&gir=yes&clen=4342100&ratebypass=yes&dur=74.443&lmt=1612644737161237&fexp=24001373,24007246&c=WEB&txp=5438432&n=P5SPrqAb0u0ngA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgfAxO3gCDHVv5SKQcA_MDQeERdyhcEQwdpe8W_6WL7YwCIDrQrj0yzZPNz8VQ9WnaNWlUseb2PC6CyjVXQs2V6Xlx&redirect_counter=1&rm=sn-a5mrk7l&req_id=cec90a958718a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=GO&mip=2406:7400:75:c5e4:fdd8:a8f3:9dcb:b88c&mm=31&mn=sn-5jucgv5qc5oq-cagk&ms=au&mt=1654061061&mv=u&mvi=1&pl=52&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAIGVx2JylmVbEB2gUPuyaVORlasfWc2waSr_uXhPxbPmAiBko3SK-E3lHmbuLA1rOyXKjJe2QiDaRlhDikzVJWmGag%3D%3D",
    title: "War",
    category: "Action",
  },
  {
    _id: uuid(),
    thumbnail: actionThumbnailTwo,
    source:
      "https://rr3---sn-npoeenee.googlevideo.com/videoplayback?expire=1654082234&ei=WvaWYsaaMNKTsfIP_-CYqA4&ip=192.200.158.238&id=o-ADo8C4JRq070j-yCvJg3q5JBkltp6dvFWP3aD8-9WYSm&itag=18&source=youtube&requiressl=yes&spc=4ocVC8vhGA1N-IyiiqJPQbCy88vi&vprv=1&mime=video%2Fmp4&ns=-cjZnrWa-2Fkgh_rJJVJqaMG&gir=yes&clen=12767676&ratebypass=yes&dur=170.388&lmt=1415250748463952&fexp=24001373,24007246&c=WEB&n=u5hSCCZJ_1aAtA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgG08vwRaZrXcqp-k8iHGV3S3JNcDfWPLyqmq6ll2BwkACIGgUc2kCLXU_osoErA2y4hCf-MX9x8I-6tF4SqGt-K-H&redirect_counter=1&cm2rm=sn-q4felz7l&req_id=7be82bf8dbd8a3ee&cms_redirect=yes&cmsv=e&mh=aC&mip=2406:7400:75:c5e4:fdd8:a8f3:9dcb:b88c&mm=34&mn=sn-npoeenee&ms=ltu&mt=1654059912&mv=u&mvi=3&pl=52&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgMeJHWC9DcxSs_PH10CTSxSm3ARcQiNKK93tzcJTdoQUCIQC23Wdulmv9wbfqV8JAkK63wYxpokjmlKqjkD7g7WQRWg%3D%3D",
    title: "Bang Bang",
    category: "Action",
  },
  {
    _id: uuid(),
    thumbnail: actionThumbnailThree,
    source:
      "https://rr2---sn-h557sn67.googlevideo.com/videoplayback?expire=1654082267&ei=e_aWYpOBC46Ix_AP04OaqAo&ip=191.101.31.41&id=o-AH8LuKz-2Ok1C7PFDPbyLoc__U97PAUuT_LgaZnI220C&itag=18&source=youtube&requiressl=yes&spc=4ocVCyEtSGUySY_IVk3JO01G1poZ&vprv=1&mime=video%2Fmp4&ns=zY9e8gh3z9VYAsuvWM1ldLkG&gir=yes&clen=13103921&ratebypass=yes&dur=164.513&lmt=1540113875599354&fexp=24001373,24007246&c=WEB&txp=5431432&n=WtEUuSDbudpK-Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgfKsk2uO6DpaAUVo--UG_WPDIHDYywIgryrNW7leNvwsCIQD8mwka4v_IeNRkTgJa-Kz1DgMLGO-CQCnOcBI7V6eJiw%3D%3D&rm=sn-4g5ekr7l&req_id=b9c23894c578a3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-5jucgv5qc5oq-h5567e&cms_redirect=yes&cmsv=e&mh=iA&mip=2406:7400:75:c5e4:fdd8:a8f3:9dcb:b88c&mm=29&mn=sn-h557sn67&ms=rdu&mt=1654060629&mv=m&mvi=2&pl=52&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIga2F37E7K4o0SX_MJvSB0mLddPGvH5smve-_oA9fxfB0CIGVql1r-6XrFvqT4jo5G6SSzacbTnWOyqYhoE8G9R2fa",
    title: "Ek Tha Tiger",
    category: "Action",
  },
  {
    _id: uuid(),
    thumbnail: actionThumbnailFour,
    source:
      "https://rr3---sn-h5576nss.googlevideo.com/videoplayback?expire=1654082299&ei=m_aWYoCkH-eTjATe45fwBA&ip=207.204.248.63&id=o-ALHjcwJGz2GOMgP9D2vpyjSwmszG1cs1TIP9Uac2Qpkg&itag=18&source=youtube&requiressl=yes&spc=4ocVC6KnPmwjlxnVFQcZU91sBSm0&vprv=1&mime=video%2Fmp4&ns=Ri2Z_sT7fvUu-ZQP2k4s19IG&gir=yes&clen=8700528&ratebypass=yes&dur=123.019&lmt=1521442666310200&fexp=24001373,24007246&c=WEB&n=_A7LYFwvaDp7TQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAIGrmot0oDXvpa9ohklRubeNTaxYnwq5BFiAJcdDiGjDAiEAs7vvW7Qb2WkB12gzmb_X_gJFhf_2PEFFtdpZtPbJYro%3D&rm=sn-42a4pcxgoxu-hp5e7l,sn-q4fez77l&req_id=ff530a6097b2a3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=cH&mip=2406:7400:75:c5e4:fdd8:a8f3:9dcb:b88c&mm=29&mn=sn-h5576nss&ms=rdu&mt=1654060629&mv=m&mvi=3&pl=52&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAPw-SyGNrVKzdXnuC5ZZwU8mlpTVGzBze9DVHC6EBarxAiBG9DBkC3_gGyxM3wrypvZnaJBEe09zpDdW3duObAHOMg%3D%3D",
    title: "Dhoom 2",
    category: "Action",
  },
  {
    _id: uuid(),
    thumbnail: romanceThumbnailOne,
    source:
      "https://rr5---sn-npoe7ner.googlevideo.com/videoplayback?expire=1654082330&ei=uvaWYpe8DamJ6dsP7vKJ-Ao&ip=191.96.168.227&id=o-ALwo2Xurkrq42rDy4TUZQmr5hkSJoYNMdKPoZ4ZerK9L&itag=18&source=youtube&requiressl=yes&spc=4ocVC9Lmn_PLWoQEW23SBRINh5yq&vprv=1&mime=video%2Fmp4&ns=aORC2zDK9_E4a4hlU9SygnEG&gir=yes&clen=14140427&ratebypass=yes&dur=165.627&lmt=1579819651037453&fexp=24001373,24007246&c=WEB&txp=1311222&n=r9Gt8nUEeBsLVQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAKTHi4VfTNUgLfrONPitctX8nzOWr4Xs7WNLMbwqBtAVAiAGdRlws3EHYd_CAsDb-uuiqonPwG7HKepTHI76XmtkBg%3D%3D&redirect_counter=1&cm2rm=sn-5hnezz7l&req_id=62c869b714f8a3ee&cms_redirect=yes&cmsv=e&mh=n7&mip=2406:7400:75:c5e4:fdd8:a8f3:9dcb:b88c&mm=34&mn=sn-npoe7ner&ms=ltu&mt=1654059912&mv=u&mvi=5&pl=52&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhALGtqnWVr5SrtSbady8vLnYr9JhFDn0Cpq7aS3sUxEj3AiEAnJjkm-OrNA-MEE-1P1Qm1IRCnjALzeWuEypAh53zKu4%3D",
    title: "Band Baaja Baaraat",
    category: "Romance",
  },
  {
    _id: uuid(),
    thumbnail: romanceThumbnailTwo,
    source:
      "https://rr1---sn-npoe7nz7.googlevideo.com/videoplayback?expire=1654082364&ei=3PaWYvemCbSWx_APl9iL8AU&ip=156.146.60.130&id=o-AEk9MLvEZ_0HzB9Vam3uc8vsvI0SZxItI-WH8Yjvuo_8&itag=18&source=youtube&requiressl=yes&spc=4ocVCwACbxqSVa6DzBo0O-AuDXO_&vprv=1&mime=video%2Fmp4&ns=NADguqTW_Zu66bOVGss5kVcG&gir=yes&clen=14035730&ratebypass=yes&dur=212.346&lmt=1635253553102110&fexp=24001373,24007246&c=WEB&txp=5538434&n=UQmyEIe8Uqud-w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAIg7B3I5kgXPbuZqWMSBlAZKUd5-b9FRwwbKwHpU2dknAiEAls_tUeBvJ0e7N5CyaahpDK_jMKwDxOCkNSMCObJnkmQ%3D&rm=sn-n02xgoxufvg3-2gbl7z&req_id=37c12b85e290a3ee&cmsv=e&redirect_counter=2&cm2rm=sn-2gbek7s&cms_redirect=yes&mh=h_&mip=2406:7400:75:c5e4:fdd8:a8f3:9dcb:b88c&mm=34&mn=sn-npoe7nz7&ms=ltu&mt=1654059912&mv=u&mvi=1&pl=52&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgb4zprsxNRZp_MR88D0dnZgRiiBUcrKtatDzRmMbWPxECIQD7A3lggIn05s621PgvE_X1jyvY1TqfUheoG3fye_3xIw%3D%3D",
    title: "Yeh Jawaani Hai Deewani",
    category: "Romance",
  },
  {
    _id: uuid(),
    thumbnail: romanceThumbnailThree,
    source:
      "https://rr2---sn-h5576nlk.googlevideo.com/videoplayback?expire=1654082441&ei=KfeWYqPEEJqGhwap8ICIBw&ip=154.3.44.51&id=o-AOU2KDHjO3tXT8Qu4o6cjXJdq7YQO-ah-W7krgo6v3VV&itag=18&source=youtube&requiressl=yes&spc=4ocVC4EXk65RT3sXAm9TX4o43wTb&vprv=1&mime=video%2Fmp4&ns=xJc7zSm1se2P6AfJP93E0uwG&gir=yes&clen=3597705&ratebypass=yes&dur=54.056&lmt=1638408186099768&fexp=24001373,24007246&c=WEB&txp=5319224&n=NW4qah3gGuen0w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgDiiz3vKzfiQHVbExDUFwvPbC7AFTuV_iiXR-ehYZdzwCIQDRk1-6VnI9YsHPS5-dXeUcnYeqtMMyq1tzBFoqjXHe1w%3D%3D&rm=sn-p5qe7k7z&req_id=467e25a51baca3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-5jucgv5qc5oq-cagd7z&cms_redirect=yes&cmsv=e&mh=SM&mip=2406:7400:75:c5e4:fdd8:a8f3:9dcb:b88c&mm=29&mn=sn-h5576nlk&ms=rdu&mt=1654060629&mv=m&mvi=2&pl=52&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAOzge6UPbpomsCtTEvldAKBbYYoZ6j5Kf9fowpYumS_xAiByllHZapHI-wraubmDjce4VqLj5T25AnQEOqSzQSN-Dg%3D%3D",
    title: "Jab We Met",
    category: "Romance",
  },
  {
    _id: uuid(),
    thumbnail: romanceThumbnailFour,
    source:
      "https://rr3---sn-h5576nlk.googlevideo.com/videoplayback?expire=1654082477&ei=TfeWYu7MEr3srtoPgKqH8AQ&ip=103.237.57.145&id=o-AADz4s2gon4tsfVX_-gGlKHdzQaTKkGXkhJBn6a7mZBV&itag=18&source=youtube&requiressl=yes&gcr=in&spc=4ocVC5U9YHdnEz-qzAcEJM6lssEk&vprv=1&mime=video%2Fmp4&ns=S7hc885qtFGDYy7vGLz0lDcG&gir=yes&clen=11487656&ratebypass=yes&dur=171.432&lmt=1555307302951420&fexp=24001373,24007246&c=WEB&txp=5531432&n=_kR6rBcj8Hel2Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAM4UCtH-P6X6MX7mbSjzxQeJpNkv2py_Vw3NGUfd38dPAiEA4F0gHDyUvxP1Gqpk9JM49MRfk19UHBRhbtDKBPRIOcc%3D&rm=sn-h55ey7s&req_id=4e2aa8db60d0a3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-5jucgv5qc5oq-cagz7z&cms_redirect=yes&cmsv=e&mh=qv&mip=2406:7400:75:c5e4:fdd8:a8f3:9dcb:b88c&mm=29&mn=sn-h5576nlk&ms=rdu&mt=1654060629&mv=m&mvi=3&pl=52&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgfX_XsKJoPQ2prsb_ttmfoTRZ1yrxAhryld0tXOirOzoCIQCD7KJf26CflZDZEZF6tUTI_HziJhHVYG_IzbI8MlBpHA%3D%3D",
    title: "2 States",
    category: "Romance",
  },
  {
    _id: uuid(),
    thumbnail: dramaThumbnailOne,
    source:
      "https://rr3---sn-h5576n7r.googlevideo.com/videoplayback?expire=1654082537&ei=ifeWYuGCDtKKkgadzYXICQ&ip=64.145.76.44&id=o-AKW_ig4f6dQiHRAQOcr9tpm40G8v7axbY0NDBt0Z83Gp&itag=18&source=youtube&requiressl=yes&spc=4ocVC5J-LCq8Vx-um6fEMoOI19BP&vprv=1&mime=video%2Fmp4&ns=0JzLt0ANRWT4KygqBbQf09wG&gir=yes&clen=11951760&ratebypass=yes&dur=177.237&lmt=1637063631846499&fexp=24001373,24007246,24010694&beids=24010694&c=WEB&txp=5438434&n=-MIaRhaN8ikDtg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAO4RQj6Ypr5mHk4PUNkQetD8biJf7mnUcUbb8MIpVuwkAiEAi09lc3Dsi6ENM-6AbewSNiqRwWdH7DlBk-px5xXx5-M%3D&rm=sn-a5me7d7e&req_id=ae8f796b8797a3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-5jucgv5qc5oq-cagz76&cms_redirect=yes&cmsv=e&mh=VT&mip=2406:7400:75:c5e4:fdd8:a8f3:9dcb:b88c&mm=29&mn=sn-h5576n7r&ms=rdu&mt=1654060864&mv=m&mvi=3&pl=52&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAOsHOEkaQQ_BIYoemMpjjSnOR5UXQaZVDOMindmWi4fgAiAcClbUmMHcPrL-9SkPzjNSO5kcJdiuT1h0iMs-m8nJxA%3D%3D",
    title: "3 Idiots",
    category: "Drama",
  },
  {
    _id: uuid(),
    thumbnail: dramaThumbnailTwo,
    source:
      "https://rr4---sn-5jucgv5qc5oq-cagk.googlevideo.com/videoplayback?expire=1654082567&ei=p_eWYqfvNPeVsfIPkPyf4A4&ip=154.21.208.241&id=o-AMeFwX42pDFAqaQ93AS13sRgxqeQe5NmysMgH8S6g_PC&itag=18&source=youtube&requiressl=yes&spc=4ocVC4o7qIFGj7dKtkZqhDAusz1F&vprv=1&mime=video%2Fmp4&ns=FnKkZZ8geQgfDAMtgSXRiPoG&gir=yes&clen=12709494&ratebypass=yes&dur=175.018&lmt=1649065689438062&fexp=24001373,24007246&c=WEB&txp=4530434&n=qtXolTf1k2_rAg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgf3t_2gWCfW3BImEkOba_ICYD9XkQMLLRS72dYgNMixUCID3mZy7-i95JYZZPlyo6BdAhIJEEICZolbmSiKq1C_Te&redirect_counter=1&rm=sn-o09s67e&req_id=2c361dfd9ee1a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=9d&mip=2406:7400:75:c5e4:fdd8:a8f3:9dcb:b88c&mm=31&mn=sn-5jucgv5qc5oq-cagk&ms=au&mt=1654060860&mv=m&mvi=4&pl=52&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhALgj2MENp2VZ9zEu2neQNlBeLsGkulJWj237JdGF0wsCAiEAg1EEJsYIFDfca9iN9lfEdmN7Ts50TWIGyEbTW-v7QOY%3D",
    title: "Shershaah",
    category: "Drama",
  },
  {
    _id: uuid(),
    thumbnail: dramaThumbnailThree,
    source:
      "https://rr3---sn-h557sn6s.googlevideo.com/videoplayback?expire=1654082610&ei=0veWYo_fL8uM2_gProCdqAg&ip=64.145.79.3&id=o-AIy2pKfRyQH7FRreUqlmGcoSjHOV_KinIzBc2_URBYte&itag=18&source=youtube&requiressl=yes&spc=4ocVCwjrift1g0-rzflpJvB9il5D&vprv=1&mime=video%2Fmp4&ns=mhvjxMtuB5ZB82ejGPfBGx8G&gir=yes&clen=9598297&ratebypass=yes&dur=162.052&lmt=1578163365649008&fexp=24001373,24007246&c=WEB&txp=5531432&n=ExaoocAX6G9-IQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALPwm-BR8cPxvg33u_suwGkol6qV8GeOaZq0g0EzvCxTAiBdwVL8-OBKggar47rt4evQ35BJBAvrku1XmxnFnHqzsA%3D%3D&rm=sn-ab5ee77e&req_id=308572d50e34a3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-5jucgv5qc5oq-h5567e&cms_redirect=yes&cmsv=e&mh=nD&mip=2406:7400:75:c5e4:fdd8:a8f3:9dcb:b88c&mm=29&mn=sn-h557sn6s&ms=rdu&mt=1654060864&mv=m&mvi=3&pl=52&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAJVMm80_E5KRON_f-U7GJQ0qwX3z8tLqNMd0WiD4dV65AiEA00ZYrDt5i_OG-rmYqRl_Q9c2xeIrmMX5YlNXWCnWw38%3D",
    title: "Gully Boy",
    category: "Drama",
  },
  {
    _id: uuid(),
    thumbnail: dramaThumbnailFour,
    source:
      "https://rr2---sn-5jucgv5qc5oq-cag6.googlevideo.com/videoplayback?expire=1654082636&ei=7PeWYryoOPO4mLAPlfS0yA0&ip=216.131.88.152&id=o-AJZZO3kjhX3Sh1N1urNMCfqtu8iEmoxdAa1ispDCA3Pb&itag=18&source=youtube&requiressl=yes&spc=4ocVC_kL4_JH1BRpcJ96ZeEPAI2T&vprv=1&mime=video%2Fmp4&ns=7ZCdTfSJCv7a9sEjDJbe3JwG&gir=yes&clen=11998369&ratebypass=yes&dur=183.669&lmt=1643093542352767&fexp=24001373,24007246&c=WEB&txp=5538434&n=r93Igqs8PjZEJw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgUICHyg6wGKGlciARPus1cDKAQWNBinXUjXuTbxe0VgcCIQD0YCg6PA6OwPNhG0KxcGUrTCxwjWjZsqLc3JaWDZ4zAw%3D%3D&redirect_counter=1&rm=sn-5hnell7s&req_id=83c2f762b95ea3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=55&mip=2406:7400:75:c5e4:fdd8:a8f3:9dcb:b88c&mm=31&mn=sn-5jucgv5qc5oq-cag6&ms=au&mt=1654060070&mv=u&mvi=2&pl=52&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgb_fAKE6o0o02Hkf0PYWY8ZmKci4zxDyI8SbCiCh8-7ACIAzuU8quJgfrXMcUXHZgFc_xgZ2lkMNiBVa0ZiuQEO2o",
    title: "Badhaai Ho",
    category: "Drama",
  },
];
