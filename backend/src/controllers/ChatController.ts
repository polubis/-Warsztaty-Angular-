import express, { Request, Response, NextFunction } from "express";

import { parseSuccess, Forbidden, Unauthorized, BadRequest } from "../utils";

const chatController = express.Router();

chatController.get(
  "/rooms",
  async (req: Request, res: Response, next: NextFunction) => {
    parseSuccess(req, res, [
      {
        id: 1,
        name: "Paca ssdds aassda adas dsa sdsasada das ",
        description: "社會科學院語學研究所",
        lastActivity: "11/18/2019",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKZSURBVDjLpVPdS5NRGP+97tVpw9nm5tpShiSsFhMMImiCQlAOk+im7Ma6UKK86g+oCMKwgi66CLuQ7rqqBRVRQS2aFIFeCA7xQjC3qbkcus/345zTc5aNoqALX3h4znPO+X085z1HEUJgJ18Ndvip84+uJBljezlnYMykMGCaMvRqNgw51t+cvBk78ReBBLeEIxCCQTAOwU1IMkFkgsh4JZuYeT55/J8OpAonkLaZrmzkspZAmUldhtXuxUTjbTy48Z62kFOTvBrm5fjd/oeqtOgJDvy3VxZ7h2vnDoFxgeR63nL/yfQtmv5JcPXlIubTOTCdw9RJgcLUWLXe77OBFKGbAgf9DnS1O3Dv8WdnpQXD0HDRHUexZmnbskEW9ap9We9q9mMkeRj2BgVLq1kEWh0wdANVAk6nzPTSNtCoAmUW2+chAYbJkUjmUSJXVQJdL1eAdY2eyomXS2UklvJIFRvhavFiNb2II5YSFL2A2LNJeFua8WVmA62qhp6eHps6Gf8G8XGC/gQHFxyszoFj/WcwdOEsCoUCksl9eP3qBbpqp3FqYBgN9fVYWVlBvXUab7/bryvyKgeDwcVwONxeLBbhdrvF+eFh5c7YGLa2toTP51NCoVAFlMlkkE6nYbfbMTo6img0uvnrKg9NTU19mpub++p0Ok05MTs7+yGfz5cGBwfR3d2NSCSCvr4+5HI5JtfknqamJqsqB4lEIk7paGdn5yVSGKPx7kAgoGWz2drx8XHYbLaKimzJYrFwuSbrVCpVVn5/jdTKgY6Ojqe9vb172trauKqqzrW1NSwsLMBqtcLv98Pj8dC7MDeWl5drYrHY6h8ExGzxer0hUoxS724CWeSLpd5HpKDL5YpSrtU0jZHTdXJ0+gdZxaA90+h/PAAAAABJRU5ErkJggg==",
      },
      {
        id: 2,
        name: "Bustard, kori",
        description: "'",
        lastActivity: "2/1/2020",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIsSURBVDjLpVNNaBNREP42Wck2MVUilJr+YJC2KG0kViGWHsTSS0HBg+DVq+hJkIJXD714E8FePHnKpdSDf4EebEJOBq1NSbUNiCYNRmPSmHSz+/Y587YpCB4KGfiYx5uZb76Z3adJKdGNedCldU2gp1KL/53BcWyChJTsBaEN2xYQwqaoRWcblmVB5+RweOKgkHcipbMPl4DPTNLxjsMxgY2NpEvAZpq7qsANuglukdgv6sBVZBhBUtByCVxmB37/cQwNnUezWUW5nMfw8EW6t7C2tozx8avwenVsbq6gWv2q7m3bhMe2rQNmLi4UMhTYo+IL2N5OodGoIBK5pJLz+SQ1CYFrhLBIARHwUnhOvmCr10vY2kqh1apibOwKAoEQSqUcgsE+jI7OoFb7rnK5KTfSHaelNusSQQWFEMjlXqmkWOwGBgaieJq4jy+/dlBv1rFn/sHZ/lPwCxM6y2D5QrTVUiYnbypp7XaD5J5QseX0c5S1Ci5PxzEYGsHK+hIyn97B+OlA59lcBW1ks4l/Nt3B6/dvcX1uDsIjcO7kLJK5BOITU0gsvYDHNE21UZ8voGAYAfWJGD09vaSiF5X6DxzRjuLambtqT/dmFnG6LwpBM5OCFs37Um2W/y4pTfJS/XncndX9JoL1YhofiquYn32GhTe3YHh98GoatMO8xvid8MPByLEHU9FpjPTH8Hkni/THVXwr1B5ph33ORLJA7jYhSNglPMk8Ls7/Be/8gsufCT5oAAAAAElFTkSuQmCC",
      },
      {
        id: 3,
        name: "African bush squirrel",
        description: "åß∂ƒ©˙∆˚¬…æ",
        lastActivity: "12/29/2019",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHiSURBVDjLhZPJbhpBEIbnJXxNxFsgjfJ8VixjYscXx7EdKzdWgdgFDggQm0CsZhFCCIEAcRx7EN2Mfnd1xATEkkNdqvr/6q/uaqXVaqHZbKJer6NWq6FaraJSqaBcLqNUKp0BUE6F0mg0YBjGXozHYwnJ5/MnIQp1JsFoNJKdh8OhCaGccIFMJnMUopBlOkzdKFEsFsuapoFzLvMEzOVySCaTByEKdd0cFOKVsDxaLpfg8xlY6o+sDQYDpNNpJBKJPYhCnTeW1+s1SLxeLMC+2cC+noMlX2St3++TC0Sj0R2IImbUF0JAhxhj4DPR2W4Dv78Df3oAu74yIb1ej1wgGAyaEKVQKHwRM+rz+fwv5LUFdnEO/nAP/vsZ/NfjDqTb7ZIL+Hw+CZGUbDarihn1meguIZ0OVleX4I9bEPslWCIu6+12m1zA4/GcmbOkUilVzKhPp9N9yPMT2O0NtO/XMMTrkItwOAyXy/V550bFfGo8Htcnk8k/iO0C7MaO958/sHrTtsUWc4TtiMViaiQS0WkTJaT9ipUQG+J1NmKn02kxL/HQcoRCITUQCOi0iZsnJrHI74iPAij8fr9V3LROC9YRoxwSnwRQeL1eq9vt1knscDgsB1f5f99VdLUK8adj9Q9ogTPkuLLcmwAAAABJRU5ErkJggg==",
      },
      {
        id: 4,
        name: "Galapagos mockingbird",
        description: "␢",
        lastActivity: "3/9/2020",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ8SURBVBgZBcHda5V1AADg5/d73/d42g66bF8ZTgbbxcpoKaNJXWQ3fUJJdRF5JxRF5EGEboIZ/QPiTeFNGF03GFiRUSZiUGxlSlnqtsZya6ustY9z3vPx9jyhfkRXacCEVBVARARABAA0ccvJfME7aWnAhOGDVX37STJiSgjEQIjEQAxICAgoWtz6rlr6ZEoqVdW3n3pC/xgJVn7izxliJImIJAiRoqDSTe8+eqeqKUgyYpkHDwEO0djg+jlunKW1jkBRIHB7mfJdtInaCCmbS1yZZPYiG6tkndz7HE+eYtc4INBoUGvQzMlJRcTA5hJXPyIG0kj3KKOH2THAQ0eZOc2Nc9Sb5HUaLWpEERH9Y7zwIY+9y9CzrM3y5VssXAD2vULfKPU6tSaNJjlRGxICsk56RnjgZZ44Rdcg0+8zfx44cJRiG7UGjRY1ooiAvy/z6ZtMn2ZjlayDR96mcg8XTrK+TKnC3meoNWm0yUlFxEgR2Vph4SuWvuX+w+x5lAPH+fgNi++9ZvHarzZ+uy4rp3avtw3mpNoQSArGj5NVWPiamQ/oHqHSZ3EluL2ybPT5I7YN3mfrx8/9fPEL6WYUQSzo2cuuMXpG2P0wa/9wZRLMTX9j6OCLyjfPC2de0jE7ac/ATvONIAUCWys0Nsk6WL1Jvc7vv4B89Q/l/kGeOgYgPXG3vB2kchRNtPjsGNkOFi5TbzL7PWdelXWWbf5wVufU6+pbyzbx31oiTUhODOvSf8e4O4cpVYgF23vZ0UdXHzEKMTN/7aqYRY1kw79/FeaWEt3t9qVQf1xXqd+EflVtNFFDjhw1NFm03dz6hrwVZElhZywuDa20n/4fCNbrcsCV4KMAAAAASUVORK5CYII=",
      },
      {
        id: 5,
        name: "Arctic hare",
        description: "␡",
        lastActivity: "8/26/2019",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKDSURBVDjLhZNfSN1lGMc/7+939ORU1C0iszwSG2duOFqNBQ2meJUoY4MixiiKiCCGMMauZYJ00252uYIuRlsgKJRsDLE/VBIhu3B/knVmInpy/jnrpB71fX+/99uFO3KkrAfei/fh+Xx4eJ/nNZIoRtx9Vq6xCTs0hCTwHnmPJOQ9ya4u+PYHKkdumSKToCQURVvFRXBLUhRZV4oQbBO4aBOIYxTHBOlVyt6Y3brL+/8RWIesJdi3D8UxiWN5glfrYM8yQToN6+vI2v8U9JrZLGFTE+HLKcwLqwS72wmOGRKpFP7X35B1vTsKktev9ZD9o5epacJX1gga3iKofQ2lsmjiAXow2Vt773ZPKWMk4X5KVUhhWl6hF/j+5z5U2+IHZUcvQFCOnf4SNzD+tVrDi1KA9yJ2hYX6N+enjSTs9/Uz2tXcIPFkCiKoOw67Usg9Ri6PWxonLswjDN457PIUNrf4jpFEYcCc8I4vwgMfVSUaTiM7h7eP8S4HcQEUgUlgEtX4yJEfu0Zu7O5XJDljiouUv2r2+pih8v2n0uHzJ5F9hKJV5AsoXgMTEuWyzN3sj+0yPYcuq2/bI9a8rQxJjqz/Pjjo/7oPEtIG8hsgiyHk0Tf9ObdBRxH+xxTqTmvFVFQOu3wGGUAegwFtLhEhKy2faHjHMQKIpzrL6l7CmASKImwuiynbTVBeQ/kzzzbeuWhaSuu3/YWlwacrvGgPaw+Q/+USS6OjGQw/Vqb3vlu9v41k/UFyD+c6gTv/2kEcR62m6sWKhaHzLHw3eiVyHG7+WO/9OZHpmBz4bNauWdZX6dzesrR1Zj7l/Uwfk3fP8XppXhI/d1MzcobPb5ziXmn+b0pcjPW7AMpFAAAAAElFTkSuQmCC",
      },
      {
        id: 6,
        name: "Oystercatcher, blackish",
        description: '""',
        lastActivity: "9/1/2019",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKKSURBVDjLrVPPS5NxGH8jPES3HfoThC7SJaqLgjMHojB38SJGoHgQA7Fsgr8SwamMbQotPKzDRsjY1EYkBaLODWXWpkyXijO2CqZzbmkwmts+Pc9THqToUl/48D7v5/s8n+fX+yoAlH+B8l8FdnZ2ygj27e1teyQSsW9tbc1ubm7OhsNh+8bGhn19fd0eDAbLfhPY3d0tp8DY/v4+jo6OkEqlBMfHx/JMJpOCg4MDkCjW1tZigUCgXAQoWE3BxXQ6jeSXON69cmLBZsZLw2O4nzwQeEb0WHhuwfvXLvL5hMPDQ6yurhZXVlbUXHaIg8/OzsTRpL35V3hG9Tg9PRURv98fUqick/n5eRSLReRJ5O2zETge3sPTRjUsutsCa9NdvHh0X+72QgFkMhlpaXl5+avicDg+JxIJZLNZ5PN5eeZyOQFX9idQ24hGo/B6vVFlYmLCiV+HS6PpgwXPB8fgcpmLxWKg4UkwbQqLi4tmpaKiQnMuwI60JkxNTWFsbAw2mw0Gg4Ez8eQxPDwsHN9NTk6ir6/vmqJSqe6cZ6c9w2QywWKxSEbOtLS0BKPRKBwNXDifzyfvtbW1o0pJSckt6ilUKBTg8XjQ3d2NYDiMgYEB1NXVoaWlBePj48KzzVxPT4+IdHZ2ZhQ6V1hkZmYm0t/fj6GhIRGIx+PQaDTgDXFb3Ibb7UZ1dTXm5ua8LDA4OJj9+TkqyiXC1a6urmB7e7sI9Pb2oqqqSgLq6+sFbFdWVhZ0Ot0bFmhtbU1f+Beu09FqtXtmsxkulwvT09OwWq3o6OiAXq8Xmzmn05miuaSpnQ8XBEpLSy/TVm7U1NR8bG5u/tbW1pYlfG9oaGgiqMk+YY7v2Id9fwCSFd62xayLzgAAAABJRU5ErkJggg==",
      },
      {
        id: 7,
        name: "Weaver, chestnut",
        description: "̡͓̞ͅI̗̘̦͝n͇͇͙v̮̫ok̲̫̙͈i̖͙̭̹̠̞n̡̻̮̣̺g̲͈͙̭͙̬͎ ̰t͔̦h̞̲e̢̤ ͍̬̲͖f̴̘͕̣è͖ẹ̥̩l͖͔͚i͓͚̦͠n͖͍̗͓̳̮g͍ ̨o͚̪͡f̘̣̬ ̖̘͖̟͙̮c҉͔̫͖͓͇͖ͅh̵̤̣͚͔á̗̼͕ͅo̼̣̥s̱͈̺̖̦̻͢.̛̖̞̠̫̰",
        lastActivity: "3/29/2020",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI2SURBVDjLhVPfa1JRHPepnnrrT/Al6KG/YG9RD0EPFXsJCkaMHjMKIamVNQhqQW3LFqtZq9Yg1KXVcBhdZ9ZDgyblT9y8Z1fdvXo3Ua9D1E/ne6c3bUIHPtxzPr++5164JgCmDsJ+0/FI2BTu5v6n9xgSEZNWLh0BN9r6FfTTewyx1f3QqsOIre5r9ZvY0aM/d/U9Be+WHiO4PIg5n70mCEIizgM0MRQ4W+Bn93PPOJY+n8H4G6vUU8BFM8fYtL8I17ctTH7IQ9M0GBP5s1AowP5WguOjjIsTSYUyRsFXweNkjOHJooL5oIoJrwJazve7E2c8o/r52ksJDxc2YZlKgzJGQVAINPjC6y8qN8jwr5T0wJ35LByfZNx4JelnhyuPq9MMroCMZWFxxygICb5WvV7Hv+v6rIRH3k1YXzCDazabkGUZye+2hlHAVizNRDwKeo3Oohs53DlYnzEsCEWdU1UV8dhv5NM+KOFDfwu2QgcatcxtpJJR/WPlcjkwcQ0bG0wHFSuKgvW1FEqZpyAvZYyC7MjhVmFmGJXUXShMQEmcRU0cNaCJ97HN5lAV70FL2UFeyhgFRe/BhvzgHCTLKSiTQ9j2XkLlh003E2hPHGnkIS9lul9hp5a5hVLgCpSpC8jaBiEOncD66aM6aE8caeQhL2W6C5zlXye5cLPn6n3BPeSlTHeBmWOMo1aOHEMlfh5a+jI3j+igPXGkkaftNe/5Fzg5wGHjcHMkOKptJNocaQPdmT/bXw90YXDpsgAAAABJRU5ErkJggg==",
      },
      {
        id: 8,
        name: "White-fronted capuchin",
        description: "1E02",
        lastActivity: "12/21/2019",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGWSURBVDjLpZG9S5thFMXPG2NUxE8oxFAtKFnyLwiCHaxOnToodmoVh0qJFBVcRXQLuOhWLLQoWtsIfkCzmNLioA52EYz64mBKFAJKCXnuuU8HWykaS3i92z3Dj/O717HW4j7juxm8+TZQMvS1f9QzgNRZUnuKBTj/KkSTfbGG8tBrVYWbdUEqKMzQcFuEGzRc+tD76aQgILrZNx6sCI01V7XAcQBahaoiJzlkf2WRzv5E6jT1mUamlvvXv99SIDVAEgqFKEESYgU+x4fyQBnCwTAiDyNPjZGRzlh7Y0GFgbXn08HKhlck4Z65ECFC1SE0PXiEUn8AqsRe6gcO3IPol+Fk7NYRZ7reDbrn7tvjjLs392zRed+97Bymj2KJncTJZe4SF/kL1FbXwhh5cucXxMhLMTL/d//4YjVq8rK0f7wPv68UdTX1kLx0FlT43zyebLUdbR2gKuKrcWxN7DoA4C/23yYvMBSoVYjhdV40QIxAlLCWECNeAAT1TwPx2ICWoCroTYFXCqqglwYUIr6wAlKh1Ov8N9v2/gMRLRuAAAAAAElFTkSuQmCC",
      },
      {
        id: 9,
        name: "Red meerkat",
        description: "œ∑´®†¥¨ˆøπ“‘",
        lastActivity: "11/4/2019",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADtSURBVBgZBcFBSpVhGAbQ8/18JNEFu1dEW4MbaAFOhDbQPBoE7ag91MhRtYgop9KgIsIfDcQQ3+ftnNEAAACACcCnrzlJ5/zsBQAsAB93fbKzG3kOACwAp+vDbdyrLwDAaJ87ItKHI37eVGUpL7fAJLZaM6Id7bf4DmBSWrtxJ9qiHSgAk/htz8atiAfRNt51KW/G5GzwoZ8oLVpcObDFBSZQIqK1iAgKk/ddHmsRLdpTv6z39SiYlGNtdaS1diVWb/eASWk/PPPHtdg4FAVgocSxuPZqvB6rFgVgUi5FqX9Q+SZ3+QswGgAAAPAfKnCHO1UwyPEAAAAASUVORK5CYII=",
      },
      {
        id: 10,
        name: "Stilt, black-winged",
        description: null,
        lastActivity: "12/25/2019",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIiSURBVBgZpcHfa81hHMDx9/l+n82x0zadyBabMFtKSS03XGxXUlMspqxcufGrcOMPQHHhR1v8B26Wxi7ccOlKLUlqTJvQ0H5gv8737DzP5/OxJ5RcyPJ6OTPjf7juCwOn93a0X/tSsoIZoIqpIiqYGmqKiaBmmAiiSl21XxwZmbg4eKPntmvf095XlS8k6/OsRGGxJH3AbVfylpS+LLBSmbeEZc7EuNLbwkqduPqOyJkpUSUIBoT5Z5Q/9mMSMFE0KCaKeI9Rg990mc3NWxEVIocZUS7JkVNB5p6wqmY9adU6zAfMB6SSkX19hTX0UFVoINIgRE5UiBJAwhSV6UfUbugizA6T5HchMkP52yhp4zFcQxdiSqSiRM7U+EFYmnpIdW0LkKLZZ3BLzH54zOotZ8g3HUINUk2JVIXIqQpRKI1S/nSfuqZ9WMggbQTvMXXownsWR26hPsOSOvJtR1BVIhe8J1oYv0l1/TaymVdoUKprWkAd9Q2dZDMvEF9h7uNzirsvka5aQ/CByJkoUb7YSShPQ5KQSyt8HR+irrGDUP5GpTRNUr+T5u7ruNomkjTFVImcqhIVNvbyi4YFZl/fpTT5kvL8JMUd56hvPczv1IzITbx9N3Dypu9REVQUEaF3Yz9ta4s8fZMw9Pks2XCKySBqiqmiSjTAMjd4o+cocJSfxu9t369e7mQzcv7gqbEHB/k7xx/Uy4R6OdB6fOwl/+A7Obk497M21x8AAAAASUVORK5CYII=",
      },
      {
        id: 11,
        name: "Slender loris",
        description: "✋🏿 💪🏿 👐🏿 🙌🏿 👏🏿 🙏🏿",
        lastActivity: "7/5/2019",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKLSURBVDjLY/j//z8DJRhMmJQd+x89/W4IRQbY1x5L8590dzmy5PuIqC4gfvA+PPIyEMfhNqD06H+L9gfG9p33/jr23OMEiX30DTj8yT/oFxCf+hAYfBeIfwPxIyBWwjSg5Mh/tYZHzDr1D34aND7Y9tXOsf2Lg/O/z85uNjCFn908lT56eH985xXwzXvygwYUA4yLD/9Xcm+QlS572JWesP7XVyOL79/MLKci22Rc/6DXvPH+X8um+79t2u7/tOu4/w9ugFHxof8wha+1LP89NHT9iaxZIf/BCpWie7/Vi+/N/25kqvrN2Oz/suiO6QgDig6ADfgtJrX0p6TMb1u/Xd+5Eh9M4k16yCyQdH+HYOK9H6JJd+tgBv7U0j3wXVvvA9wAg8J9/6sNAvT/8gr++8Mn1MYQ8aCFIfzBf6bwB3+Zwx/8Ywu7H44e+j8VVX4hDMjf+/8/I6v/fya2OyghHHCn3GuRw3TvJTZn4mZ7P82dEv4trc//f2SLw6cp/mrX4Abo5+3+/5OBJeQ3A4s4TLPXTEsvj5mWLzxmmT+ImuJ+rXF14v8tV6b+v/Bs1//+3Vn/w/t1/5tnS/aAFevl7vw/R1TDAabZscNommOn0UeHLsNFDj2GPLHtLt83Xp7wf+O1SaCw+t+zJ/V//550kAHfwRp0s7f/tyzRkbQo1Z5pXqr7CEi/tSjTyYAZ6FNt+H/blTn/kcGmS1NBBkAU6GZt+2+UoelvmKHuph5g6QqkwalRWMNDFkRb5kh/796V9L99VwJYc/vOBFQXaGdu+a+dsfm/VsYmIN74XyttAxCv/68Jwqnr/htkJP4P7tH437srBWwziAbx4WFADAYq7gDiTyBnQ+kOkDgAwll4PHHRgLAAAAAASUVORK5CYII=",
      },
      {
        id: 12,
        name: "Wallaby, whip-tailed",
        description: "",
        lastActivity: "1/17/2020",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKrSURBVBgZBcFLiJZlGADQ87zfP/Or4wyjeWkgMSvH0lqYSUg3CSIoISoKokVtgsjaBG0jXES1CwJpFRgF0Y2ScKNBmoVWJpQhUlaWVuo4Nphz+7736ZzITPe8uP/JhSP9x0vYhAUIEMggq7bWXy5O5L6YmnzhwM5tcwCRme57+eCBt5/bdEMpMZo0EoBMSOcuzXv324v+PjV7+acfjy/9cue2WehBaWLdYK8ZPXZWUyIIstJl1bZper6zde2wW8d7DtVzi7JeP3nXs58t+eKN+2cLRMTizGwGm2Kg0AuaQhNEUASqsZFB2zaPufq6/sLeyNBbUCAJKChBiVAilAglQmnCXxemrV48b/3S8NSWKzQDzSPQA8ik1xBCRqhdUkKvYTCLnyfSXG3VOueOa/qiV1ookEmiF0WJUNCUMNCEXoThmSNWXXjVUHPZgsEBqRAFFEhURFAilAglQmQYjBlD5z+0fOVNRv/do98rKjKBArUlk4pEZiKVwsD5PZas3GhkbKPBs3v1Z0/qKl0FCtSaMpMkMwHE5T85vdvwslHd1Keu3PCY/h/v6Tedrk1QoKt0SVa6SlfpalVPvW/5+APMHHF41zsWj07LMwfNnjmknWtBD2qbaqaXvp8TUg2unT/q6eFJw0tW6KZ+Javu0jfWbH3e71+9qcw/AXrQtp2uY2xkwM0riqyt8R92Gd1wt3r5kKzTNj28Tp07Y8HQCaOrtrjz2Oc97lWgna21rTXnOr4+3Zk6/omrxtZaNHxethNE47uPTqCqMycsH1/ttv6BZv+OG9dHZrrlmX0n97xy+7L/5nMoM8vEx4/a8NDrmvKbbCeRACiahev8c+yoE7t3fBCZafP2vdvb+XwwIjamXPTamh39gZyNrClrlbXKWmVNWWuqNUu2bWR3+H8rUk+Grcb3xQAAAABJRU5ErkJggg==",
      },
      {
        id: 13,
        name: "Red-knobbed coot",
        description: "・(￣∀￣)・:*:",
        lastActivity: "5/2/2019",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIiSURBVDjLjZM9i1pBFIbfuSqu+AFJY+PFNCkkQYSQLAprm8r/kGYhprNYG9MErNIFFPR3pIqQJpWk0iYqKnHXqKhcvz9Xr5MzE6+6sAQHDkfvzPvMOe/MMM45xGCMeSi5KUz4/+hR3JFuJ/8JwB7yarVajTabjb7dbvljQfM8lUp9obXPKBSpOwG8EeLZbMbn8/khxuMxHw6HvNvtSkin0+HpdPoAMcRMAMSC5XLJ1+u1zCKm0ykfjUa81+tJwGKx4GKTbDYrISyRSHymHzeGF0ZFIqgiJJNJxONxUPnIZDIPzDCbzZcKUW8ikQh8Ph9UVUWhUMCn9y/x8e1PlEolxGIxOJ1OOBwORKNRDAYDUDVHiN1uR7FYRCAQgMvlQigUwvdfLeTzV7i+DoB8QLPZhNVqRblchsVigcl0PCizoPv9fny9fYrcnUK2WHHlVhF4riGXyyEYDKJSqcDj8YA8EWUbvsmhCLLNZsO3hoIRLjBmF/ihOeQuk8lE9i6EZCyoXfldQA4AchXkNHYSysXpgpu57FPMPQZQFOUI0DQN9Xodl080ONhKxgvcolqtSpEhFidycmeOHvT7femsqv7BOzJRVNNoNPC71YLb7ZZzXq9XViMgp7tLQLvdTlOZH2q1GjPO/v7+Xmbh/um9CIfD4s08AEgR+/f1NfWY39/Kc8aOzAwq+9snGtvpur4U+RwxrV1Q1tnJc1b3z1k5swJdPO2/GZyOpOSiQJ4AAAAASUVORK5CYII=",
      },
      {
        id: 14,
        name: "Cormorant, king",
        description: "１２３",
        lastActivity: "8/21/2019",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJZSURBVDjLhZJLSFRxFMZ/995xXpYzaRn0AsloEUlQLSwqS5ShhGjTwtpZ0Toogly0iB4uWrWIVkLgvsVEi4wKsUULIwQxLGyU8TE6vmbm3v+9/0cLnXA06ducA+c7P74DxzLGUKHB3sPALZQ6h5HHkBKM/Ib2PyH8V3Q8GF1vtyoAg713UOoRsWSMSBQsB4wCtwD+EsxlXEzQzZVnzysBg71hjHlDtDpFVQSWcuAug6XAF6B9cCIQr4FCHhYm3iHEZW689m0AlOohVp0CIDeu8BZa8d04bXctLnVbiGKchalWJocVSkF4ewpRfLKa4OPLo6CHiO90WJ5QlLyDWHIe6d/HBBfWEnxAeE9Rfh2B+El9o0NmSKGDphDK7yKadCjOgldqRwuJkd+JJRso5MGxIVTTTDHfiRBnUH47s2P91O13mB7pslHe6t2FOQjcLwSl24RriuR+9bE000I+28L0jz7iu4rI0nWUO8jitCS6DdxSKoRwG8BAUAJfiJE9bTlL6/HF2vMdWutOpRRaa8JefkbUttW3DD0WBH4BnCTa3xtCuiAFuEVQXqhQtePqseMnT7NZu/v73zfheTaOsbA0WMYJUVzJMDXaiFdwkZ4h8E4A9LydrNi+d3EftrdyCktaGLPM768JIBPi2otD641iYCBS7s8eqQdgfN4HwLUicR4OS+BA2RPamFMp9bcfm/UqZlLKTXdtApRNN5urgVVY+d3Xw8uyt0pg2zbZbJZsNott21sC/pVgEUgmEgkSicRG+OJ/AUqpdDqdblNK1Zd/YK0WtNafN/r/AJRSSvzM+v9SAAAAAElFTkSuQmCC",
      },
      {
        id: 15,
        name: "Magellanic penguin",
        description: "-1E2",
        lastActivity: "9/2/2019",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG/SURBVDjLjZK9T8JQFMVZTUyc3IyJg4mDi87+GyYu6qB/gcZdFxkkJM66qJMGSNRBxDzigJMRQ1jQ4EcQ+SgVKB+FtuL13EdJxNDq8Ev7Xu85797T51nwhqeAH5w6cAxWwDgReX7jwYfdaCIraroptB7NLlVQrOoiGEsL1G06GZyxuILicsMUH3VTlOqGKNUMUdTacj+j1Nng0NGAT2WxYosK1bbIVVoiW27J9V8G57WWKVSczMV5iK+Tudv1vVh5yXdlLQN+os4AFZss2Ob82CCgQmhYHSnmkzf2b6rIhTAaaT2aXZALIRdCLgRtkA1WfYG4iKcVYX52JIs7EYvFmJ8wGiEXQi6EXAhdyn2MxQaPcg68zIETTvzyLsPzWnwqixVbhFwI3RFykes+A9vkIBKX4jCoIxdCLrI4/0OcUXXK4/1dbbDBS088xGGCCzAJCsiF2lanT8xdKNhHXvRarLFBqmcwCrbAhL32+kP3lHguETKRsNlbqUFPeY2OoikW62DNM+jf2ibzQNN0g5ALC75AGiT59oIReQ+cDGyTB+TC4jaYGXiRXMTD3AFogVmnOjeDMRAC025duo7wH74BwZ8JlHrTPLcAAAAASUVORK5CYII=",
      },
      {
        id: 16,
        name: "Lesser masked weaver",
        description: "1.00",
        lastActivity: "8/7/2019",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKOSURBVDjLpVPbThNRFOUD/IJ+B6gvJr740mg0JsQUX0yMiUl9MJJIwGBsMOgDQSEz0mANhEIKoqhBBTEpahm5SWxLKTO9WBAKBTqtw9DpDbqcfUprvbw5ycpJTtZae+09+1QBqKrEqS4YdNToMOowHcJ4eGf4k18pPKKjuumFYh75vMbPuIPC4tKy7PX55akFUXj6McI3DCfMxCHubwaH4hODrg2LdzksxeIKVC2H/EGBYTeVRXQrgekFn9QzEbYQt2RSMqgmsU/8pqYzedCnZfeRUHOQdexl9tmdqmUxNedRbWMBMqlmBtQXxabKJfGOksW952HEklmG1mdhRBOZssnE5LR0fSBG7RjIoGZE+M5T7JJ4I5mBqW0Bqztp3OyTcLyuBde6/ViLpxlHjGyCG57hSUsGxumvAYF6pqhUcV1O4+IDD+aDCs7dfsfOM02jzFBJ5bGd1NA79FogLRmYPItLMg0rvptjBkSsa3ez864e/2htM24NBBDZ0liKbP4AA44hmbTMwO31MQOKT6T6XhHHLtxhsYMbKZy3OBGOaQzFFDn09vWXDYyf5v1CUs1gV8tjNvADZ5vH8SWk4HTjK4jRvbJBaDPF/kxwPQnO5ii3UONwhvjVaByFArCyrbGpn7zCoak/wBLUtgrsDERTyO0XMDnrh8X6tjxEQ/3gjtnpmpNkpThlqnajR2QVSWj/EGVJqEBIr97ZbZcuW4PF31haJO6l1zL63qXGEkVici/P+qVEtExUObieQIdtUG3kxn4tUuUqtznmLPbhUWnGE8JqTGEzoZ79KzLGXV60cT1SQ+ebv1e58jFdfbJibnk8zrd39QncI6v8sJOX73fYhMaOEf4SL/77Mf3Pc/4JB00Hw5wBy+AAAAAASUVORK5CYII=",
      },
      {
        id: 17,
        name: "Southern screamer",
        description: "사회과학원 어학연구소",
        lastActivity: "7/13/2019",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJJSURBVDjLpVM9ixNRFD1vvhLzxUiMCitiCjFWwrJuYaGQICgIgl2wSCWSIr9AFAsbQcVfYGEj9kICizGFgoUIIUENBDFrkLiDukw22fke7501MetHtY+58x6Pd+455973RBiG2MuQsMehzBa9Xu+57/tFCnieB9d15+E4zjxs2+a5WalUSowTbIHA5zRNa+VyuejQn2PRpqqqaLVaGAwGpVqt1owUEOMtXdcxGo0Qi8XmoEUgr4fDITKZDPL5PJPeoO2m6HQ6EXs2m4VpmrvkshUGCiEgy3LEnk6nkUwm0Wg00O/3Swqzs3T2yofi8XgUD+pbSJOYqeNhf0rDl41tCMlHKjFGEG7hh1mAZw7vKsw0mUxgGEZUIGYMggDb0wyKqydweTmFZ6+HuHn15K66PG4ZeBGcX5EoQZE3OBF3oN1uo9vtYmq7+D72osNrb77OgRZtmTZgbDpkLYDCrOyVgxNwsGdJIt9UQ9cPcL+6TKqoqJRApn+CSs84c+LsJJgBWXqhUIjmdz0JFqm48/QTKBc8ShRQhLO20pdQfyngDnCCWes4vPc2bN+DLKkMgcCOspCVhAEp5gvmQbEsq1Gv1y8s3LJoHrtnoQoF1UtpeIGzc+uZmHzHFQ33nqzjmzmBUi6XL/7rjl+5/TKkzoP6gUdvr+NA4iipkGBMP+Pa6Ye0ilOhnd9v4a9Hosg4dhg4lBqjdGoVurYUidi0lnAw6SGh0RmyJP73nFeqa6+OH9l3Ro/pJDlDNlwIKq4Iqdhiig/rH7FhuvgJMpVtkQoe5WAAAAAASUVORK5CYII=",
      },
      {
        id: 18,
        name: "Common ringtail",
        description: "<script>alert('hi')</script>",
        lastActivity: "7/27/2019",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAF6SURBVDjLxZM7S0NBEIW/fWCnQgyIT0QQDKJBFBRbsRCt/Ae3VRs7wVpIY6WxkqTXxgek8IGIIQRsYjR2SkhAMJoipDAkXNfi6k18YcDCA8vMLDtnds7uCGMMf4Hkj/h/Ag0QDocngVVgrM68O2DJsqx9/bax7vf7fK2tXgCEABBvftU6vuDxMd97cXEZBFwCr8fTTCbzQKViO71J6SYJIdxYa01HRwuA123BgUAphW0b93AtSZVAIaX6qMF7RaU0WvMh4bNVSiKE/EoghEQpiTH62+qJTIzLbIzic4FypYxXdmuwEKFQyPT0dDE0NOCKVxXMiU8SB6Seooz4Run09HGa2iV+fU5Tsd+5QTqdJZ3O/vhmZ7lt5mamsaWNv22K45sdxgcn2NmLgDHm1zW7Mmwi11umFvvJoBlbaDN1/cR8IVdK3ccIHFkABA4tbnNJgFJdBC/mZS2ejNGA5uBqkwahiSbOAIKi3nEeX2wPAPNAI1AENuMb98uviwGZtIAuD3IAAAAASUVORK5CYII=",
      },
      {
        id: 19,
        name: "Cape Barren goose",
        description: "0/0",
        lastActivity: "5/1/2019",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALWSURBVBgZBcHLi1V1AADg73fuuXMd5947jzuO+WgSylIhdROEJNFIkBptclmEuza1yPBfyHWLKBcJLdq0KFBMEotKxCBSNDVJ0xzHxzyqM/ec+z739H3hwKH95xozjblSqQQAAgCAIAACBvnQ8uLy93FjpjH3+ccnhCgYDPsACIJCIYBWP0VQFJFiWCjkPjx6ZC4ulUpyA6H/pezsJZPnWpaOzhqrVd28ecGN7LgHS4lare7xSqIUl61mHe8cKJTjkgggSVYk20espqnWmevS9KE0TYXuJd12U7vV1Gun2u3UoJMJYYggDoDx8XUUfWvfn+Kj31TenDazYaPR/m3twVa1iZqRUiQuj0hbHSF0EURAkCSJNG36bya3OjnQ/uoW+VDR+lm/m2o1M/1uS7eT6XVbQihADDA+PkPRNzFel7y7w+SnKwYvb1CZ7prtrShXn7S2UlIeKWu2elglEBFAp9OVpS3JaqI5lvv3WTpf/KXIO6LeaZ12qtfNdLLUsJcJIIgDYHR0QrWeGa/XQfmtLUY/OC/On7KxcU1ntG1T9YrKyJJe+65S9LaAOACaSSZNu8j8uvDIvX5k/TO5507ctHAw83j+M1fvzUvbbb120ws7KgJiIQioTzxhddB1udVyt1c2NTnl0b5g3+mBk38OtWvL5vbutXlqqx+ufeOn37+WDesiKIrCL/N3nLp13f1/VnQ6HWmaSbtdF7cVbjx6YPe2XfIot2vDq/LQ9+LzeywP74oCWoPMUt5XGakaGx23pjKmuqZqy3xi8/0FS9mKcqh6Y/t74Mi+456e2akwFBGEEKmpq4aaSj5qbahaf2PRxoW2O3t2Sporrj244NjZw+DYd4fdXrwiEokHg1ye5zZN7bapQQBB2IpXmA7B/seJi1dO2bPzJSevfmIkxM5f/tGUWeH1Qwe/XTcz/VqpHCMIgAAAeDj8w/Lwb0MDkVjDrGhx8sz/ABdNCpr3mlcAAAAASUVORK5CYII=",
      },
      {
        id: 20,
        name: "Lappet-faced vulture",
        description: "(｡◕ ∀ ◕｡)",
        lastActivity: "3/22/2020",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHISURBVDjLpZM/a5NRFIefxCJYSsFQsGjNEBGsVXEQFEQHxQr6BaSLX8DR2cWSSUe/haOroKUVFC24CDVoMcUUrRFikubtfe/5HYe8+VOSodC73B+Xcx6ecy835+4cZuU55JroheevtvsqcscBM8DBJeRg6mYTPF0q5vYBAE4eP4rjuMABlyMHH4JI8P3X7qiBueOeNQjcHffMJgNJjuRYOmYEs64i7khZYy9rPyQ1jQLc1C10kISLrEH9xh4wxjGAKJA5yoq6xb0sNhpLJGmTc9MvUfTRZ1QUJsfMMVO2ZzlCEgNzM/N82LlPGpMxBhHM1J+/0niAlBIUCTFyqnCW+dmrNJM2nzt3uflsb2rl8d/WAGCG2UR26xAVuLPwEHNhMoRTa2xxce46rdDhU/Vt49JyvjBk0FX2zCCJAXPxo14hVSQqJbWUf3tNLp++QSvdzb/fXK0PGTimwbMlMSFa5MR0kSjDXGw3qhSmZlnfWmPt2+pOiCzmep/p0YuKmwY3Xz92jyQEggJJDJyZOc+10iIfq+9YqazTTv8s1Mr+JXfQ33hhOd++Urw1+ebr659B3K6VfQPgwIDSk1zbdGSyIyv9Lvtm7/w/ZAmOh9Ycu/MAAAAASUVORK5CYII=",
      },
    ]);
  }
);

chatController.get(
  "/messages",
  async (req: Request, res: Response, next: NextFunction) => {
    parseSuccess(req, res, [
      {
        id: 1,
        author: {
          id: 1,
          firstName: "Davey",
          lastName: "Calyton",
          avatar: "http://dummyimage.com/194x100.png/5fa2dd/ffffff",
        },
        modificationDate: "2/21/2020",
        content:
          "Group Counseling for Substance Abuse Treatment, Psychoeducation",
      },
      {
        id: 2,
        author: {
          id: 2,
          firstName: "Rae",
          lastName: "Paradise",
          avatar: "http://dummyimage.com/194x100.png/5fa2dd/ffffff",
        },
        modificationDate: "5/8/2019",
        content: "Beam Radiation of Chest Skin using Electrons",
      },
      {
        id: 3,
        author: {
          id: 3,
          firstName: "Melanie",
          lastName: "Hatwells",
          avatar: "http://dummyimage.com/236x173.jpg/dddddd/000000",
        },
        modificationDate: "3/5/2020",
        content: "Drainage of Left Hand Bursa and Ligament, Open Approach",
      },
      {
        id: 4,
        author: {
          id: 4,
          firstName: "Raoul",
          lastName: "Melpuss",
          avatar: "http://dummyimage.com/110x195.jpg/cc0000/ffffff",
        },

        modificationDate: "2/23/2020",
        content:
          "Supplement of Scalp Subcutaneous Tissue and Fascia with Nonautologous Tissue Substitute, Percutaneous Approach",
      },
    ]);
  }
);

chatController.post(
  "/messages",
  async (req: Request, res: Response, next: NextFunction) => {
    parseSuccess(req, res, {
      id: 4,
      author: {
        id: 4,
        firstName: "Raoul",
        lastName: "Melpuss",
        avatar: "http://dummyimage.com/110x195.jpg/cc0000/ffffff",
      },

      modificationDate: "2/23/2020",
      content: req.body.content,
    });
  }
);

export { chatController };
