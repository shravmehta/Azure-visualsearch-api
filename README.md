# Image recognization using Azure bing visual search API

I have created this api as an Bridge Between miscrosoft azure bing visual search api and users willing to try out this api without getting involved in complexities of setting up an account, getting credits etc. 
Also, developed this api using nodeJS and expressJS.
---

- ## The endpoint for the api is "/search" where you have include the link of the image.
  - **URL**- ec2-3-16-54-121.us-east-2.compute.amazonaws.com/search
  - **Method** - *Post*
  - **input** - include the link of the url. Example of the body: {url: https://images.unsplash.com/photo-1512546148165-e50d714a565a?w=600&q=80}
  
  - **Sample Response** 
  
  ```
  "_type": "ImageKnowledge",
    "tags": [
        {
            "_type": "ImageTagElementType",
            "displayName": "",
            "actions": [
                {
                    "_type": "ImageModuleAction",
                    "actionType": "PagesIncluding",
                    "data": {
                        "value": [
                            {
                                "_type": "ImageObjectElementType",
                                "webSearchUrl": "https://www.bing.com/images/search?view=detailv2&FORM=OIIRPO&id=447A6A76DDF08FAA6F582A64B0F83DEB9D5DCF4F&simid=608016018135780383",
                                "name": "Tempered Glass Chopping Board Sausage on the Pier",
                                "thumbnailUrl": "https://tse2.mm.bing.net/th?id=OIP.zLdOsaB4u1xTw6EFZGCp7wHaIr&pid=Api",
                                "datePublished": "2019-09-12T12:09:00.0000000Z",
                                "contentUrl": "https://www.printmypets.co.uk/ekmps/shops/51c44a/images/tempered-glass-chopping-board-sausage-on-the-pier-1093-p.png",
                                "hostPageUrl": "https://www.printmypets.co.uk/tempered-glass-chopping-board-sausage-on-the-pier-1093-p.asp",
                                "contentSize": "854087 B",
                                "encodingFormat": "png",
                                "hostPageDisplayUrl": "https://www.printmypets.co.uk/tempered-glass-chopping-board-sausage-on-the-pier-1093-p.asp",
                                "width": 1024,
                                "height": 1200,
                                "thumbnail": {
                                    "_type": "thumbnail",
                                    "width": 474,
                                    "height": 555
                                },
                                "imageInsightsToken": "ccid_zLdOsaB4*mid_447A6A76DDF08FAA6F582A64B0F83DEB9D5DCF4F*simid_608016018135780383*thid_OIP.zLdOsaB4u1xTw6EFZGCp7wHaIr",
                                "insightsMetadata": {},
                                "imageId": "447A6A76DDF08FAA6F582A64B0F83DEB9D5DCF4F",
                                "accentColor": "90583B"
                            },
                            {
                                "_type": "ImageObjectElementType",
                                "webSearchUrl": "https://www.bing.com/images/search?view=detailv2&FORM=OIIRPO&id=969A691F04535E42A81D098255616295FFD86C92&simid=608029512837563944",
                                "name": "Stem Cell Therapy for Paralysis and Intervertebral Disc ...",
                                "thumbnailUrl": "https://tse2.mm.bing.net/th?id=OIP.kZKuPaMqvv2K9V7Y0nqU9QHaFj&pid=Api",
                                "datePublished": "2019-08-09T12:28:00.0000000Z",
                                "contentUrl": "https://stemcellsfordogs.com/wp-content/uploads/2019/01/IVDD-1024x768.jpg",
                                "hostPageUrl": "https://stemcellsfordogs.com/intervertebral-disc-disease-in-dogs/",
                                "contentSize": "91378 B",
                                "encodingFormat": "jpeg",
                                "hostPageDisplayUrl": "https://stemcellsfordogs.com/intervertebral-disc-disease-in-dogs",
                                "width": 1024,
                                "height": 768,
                                "thumbnail": {
                                    "_type": "thumbnail",
                                    "width": 474,
                                    "height": 355
                                },
                                "imageInsightsToken": "ccid_kZKuPaMq*mid_969A691F04535E42A81D098255616295FFD86C92*simid_608029512837563944*thid_OIP.kZKuPaMqvv2K9V7Y0nqU9QHaFj",
                                "insightsMetadata": {},
                                "imageId": "969A691F04535E42A81D098255616295FFD86C92",
                                "accentColor": "91573A"
                            },
                            {
                                "_type": "ImageObjectElementType",
                                "webSearchUrl": "https://www.bing.com/images/search?view=detailv2&FORM=OIIRPO&id=A94AD6E801055CF2840E1EFCE4D2EC01B437AC64&simid=607994302747904217",
                                "name": "Amazon.com: Sim,Wooden With Glue Perfect Choice for the ...",
                                "thumbnailUrl": "https://tse3.mm.bing.net/th?id=OIP.r56Dskr_CHmKmuWfL_f9sAAAAA&pid=Api",
                                "datePublished": "2019-03-24T04:56:00.0000000Z",
                                "contentUrl": "https://images-na.ssl-images-amazon.com/images/I/51WA%2BRjYatL._SL500_AC_SS350_.jpg",
                                "hostPageUrl": "https://www.amazon.com/Wooden-Perfect-Choice-Puzzle-Lover/dp/B07DGQXFH4",
                                "contentSize": "17497 B",
                                "encodingFormat": "jpeg",
                                "hostPageDisplayUrl": "https://www.amazon.com/Wooden-Perfect-Choice-Puzzle-Lover/dp/B07DGQXFH4",
                                "width": 350,
                                "height": 350,
                                "thumbnail": {
                                    "_type": "thumbnail",
                                    "width": 350,
                                    "height": 350
                                },
                                "imageInsightsToken": "ccid_r56Dskr/*mid_A94AD6E801055CF2840E1EFCE4D2EC01B437AC64*simid_607994302747904217*thid_OIP.r56Dskr!_CHmKmuWfL!_f9sAAAAA",
                                "insightsMetadata": {},
                                "imageId": "A94AD6E801055CF2840E1EFCE4D2EC01B437AC64",
                                "accentColor": "8D5B3E"
                            },
                            {
                                "_type": "ImageObjectElementType",
                                "webSearchUrl": "https://www.bing.com/images/search?view=detailv2&FORM=OIIRPO&id=799AEAC8508B3AE8B34F5CCB3F122AFE09B0B234&simid=608019153388831020",
                                "name": "Paws 4 Thought | Dog Walking, Pet Setting and Pet ...",
                                "thumbnailUrl": "https://tse3.mm.bing.net/th?id=OIP.x7S9WkAO5yrUBxPZIR9WDgHaGt&pid=Api",
                                "datePublished": "2019-09-19T15:29:00.0000000Z",
                                "contentUrl": "https://paws4thought.info/images/sausage-dog-lg.jpg",
                                "hostPageUrl": "https://paws4thought.info/",
                                "contentSize": "70415 B",
                                "encodingFormat": "jpeg",
                                "hostPageDisplayUrl": "https://paws4thought.info",
                                "width": 1200,
                                "height": 1087,
                                "thumbnail": {
                                    "_type": "thumbnail",
                                    "width": 474,
                                    "height": 429
                                },


