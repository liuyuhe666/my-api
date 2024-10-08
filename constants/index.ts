export const appInfo = {
    repoLink: 'https://github.com/liuyuhe666/my-api',
    defaultMessage: '所有数据均来自官方, 开源地址: https://github.com/liuyuhe666/my-api'
} as const

export const counterMap: Map<string, string> = new Map([
    ['0', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAddJREFUWEe9l1F6gyAQhIdeovGpzU2Sm5STJJ4Eb1J7kvpmeonSLqg1kWUXE+ujn8jP7DIDBiWP698A45RDOsDXsFWT+94ofwaUTT7+liAsbNVy8+gAwuRoAfMO4FUNDX8G8AGgg6261DgZYFq5aYDveiiBAsLbCBtK1sHu9isBLv5vYJAzW9PpW9cfBsWGV/6YKkVegUXd/Rm2qlUlcF8O8FS6hwIUKLAA2Kf6QFLgBBhqpHEVBQAXatjDNNTuknMJADoZkyVxl8+rHfMggKSMDMCsedfuAncjI/xagBZ2dyzfhkoZFz92Pe1/KsHwmAb2mXxh8Qg9MPcAXsYEwI0HPAaAlTEBcBNavH/wCkQZyUaHrZR2snQDhrFjbmQDSfKBASLEKptoWQgmA6buyNpqUOHpFEKISTN2fMwCx4WQDHBdApKRwiQZqfkm5BuQxuV6YHMbFgC2t+FSgLUuyB5GBIDtbVgCUKXZPTa8FYDahiUAVZzeY8M8wCLNcE8OZE9RaR9YnGjzZnKlguuL/OM/ALLblwOYp1kb7njqOyFdSMwppqh8j8hZMZ3pX+LVKkSr9om5QbciRYJq4nh2tNIyyCuX03D8IjYVqaG4D4JW36hvT79z/ADDnhAw9a7ObQAAAABJRU5ErkJggg=='],
    ['1', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAWBJREFUWEfll0FywjAMRb97iSa7cBM4CegkhZM4Nyk9CdmFXqLu/ASXkNCOhRyYod5k41hPkvUlO2iXb5eAe//ltz2kWGmOdJrN+NO4q4GvHYA1pOQ3aWkB3gC3AVBdnh62AD76yLga8ipJ1gHoAHiqbwmxPBsIJ29jWsJ2vghcc8u3FeAOA6C7AzAiTMFpBYGU9XwpGJ/cp2QIsIKU+/8E8OmBwMqIKVhAyuaOEThSlM5VIYWqslSbr3rlj6yAqAsNpFikes99OQDCwODDAWbuBdMSHImQToZzpSBewgboRChZA/IAdP2BlRB2WuN5APpeQC2g98n1H7Npq4LL+YApoAyrIKwApj5gT4G3yXAGAJsMPwWASYZzROCBAJNZEOo+YIvABEDfB6wAoxeSbhy3K6FvN70E/4xiqnE8B4BpHJ8DQDWO5wDgHWAKOA/eVAG2S9jNAXyUvFSax+h4qPoGY0uXIW8mTvQAAAAASUVORK5CYII='],
    ['2', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAaBJREFUWEfFl1F2gyAQRR/dRPWrZidxJQ0rMVkJdiU1K6l/ppsIPQMkEgUdjgfLNzCXN8M8EEgZajgC4pu5pAd0C1leluYL5mZAWnBvWy0hyzYWJwXgBAjFBrYTO0BLAJ8xJfgAtJ0aCKLhQYgOuH+5lFE6SIluujYNgBfZzpqlTJ9DKuQEmKQsXAs5ARpAnEfRdgf4VYA+eQD1zjUwAzhAlv2ORXj7AVA9A8oimO6MNfD/ANqTu4csDqFbnFMBD0C0kO/UEWcjD4AaKkBQDbgR9wM+gNn0rQH0cb0hmjZ8td4RPz3twwOwJyIjYgR/npqa0DV09/0DrAOY4IaV3gHjtVqVYdmGH8uXAcaTV4CuX/MaJHCNJux86UWobnRqJ3vYzVaFWJkQV8B6v/cA4UmaCrQEwHKz1IB8L1A8N9sTIOhmGQH8AqQwencAlp3mVMAHiLpZTgDfTjvIot4ajN+IZm62bChbwMJ94PVN7343XCcEYo+PFAVcFxQtcL8wPGC6NztlMQXoOf1h7JT/G/YhNgOQ7dJXPPUzShDs4DT5D2SNqSE7cR7kAAAAAElFTkSuQmCC'],
    ['3', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAXxJREFUWEfdl8F1wjAQREdpAvuGKwE6YSuBVCI6QVQSbiZVKG9xghQrklbBUt6Lr17b37PrmbWC9NDjGlBv0nLAHkH9a65e5Qru5/W4BdRZVPutyBKoP6WuKwHQANYFEAawrMAmpYQMwKnAEILD8ltfnGp2APXXny6UAwge+ygJWhZvRS2AA6COjvnvAXag3jRswbsG7N5ToDXAjT/ZrQfQeghnANRFZ63SEN6s1+8rqBtiH9E/BAgzw4C6XTsFJgAewk/bToeSrAWTs5XYMAC1B5QBrei5MNLjzNUknmzZBS8x8/HvkFfgdwD81iYWQGUAUxIWqGB54DZTFuSXkrwCEsX9mgA2HsV8WQWAIAeiNlwJQG7DtQB4cXWrWyIHagGIc6AFQNKGlwcozIEGAOr0vBWX+EC4DWf/jpb1AT1yAHmhtYQTTs7mLZgpSdiGH1Gc3IS+7pJWQM+XS0k/7AC8HHK9zwMEi4Xk4fe5zg6ePA3dIiL8KS17OIN8AAXynSGMR9qeAAAAAElFTkSuQmCC'],
    ['4', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAaRJREFUWEfdl911gzAMha9ZovCWbAKTNJ6EdBJnk6STlD5Bl6h7xK8hsSWn+PSc+hXbfEhX0kWBW6Y9AOoKnR+5rXfPzZcBvt+hi4vvrApeOrz8Y9xzg84rMYTprgBKAA1gNXRxe3SWAaAvsKfloD1CFw0LYdqyj9q87Bm6eHsCYP6K4azOw8DTG0x7ApRxACgCD9PARKCj8B/mi/4YoBEL0bQ1oM5OBKonNdBZJ29yEfbql2nHn4J1BQBQF+gXzQqQNuwEsFFyDIBcvKEIbJXsLaX7BrQSb1A7MQDeUmIAgtoJAWyVHAPgiDecuhgAbymtIhAp3pgU7N6GCZwrQ2qnJWArIHsFLA0XZtmx5VIj4itHMA2pFat6nGzc28fnlrrgZ2gMTxfxw2XyA+5MYDH68ev1AO5xHqDvbOQLslqYAr2ky+8D5BFgv3azYd2GyYxQ9Xg9hCwCMRCLExJ5iBQAUR4iNQDrIVIARHmIxAC/bUQx4pvLdbbxIhOzbwQi7HiaPhBhx/8tgNiOJ4qA3I4nAlj9kon+I/atgqEUayA7SP8hfgC+19ohEKW3DQAAAABJRU5ErkJggg=='],
    ['5', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAZpJREFUWEfFl8t5gzAQhEduInDDndiV2KoEuxLRSejE3HCqULKy9PFwot3FhuiKWP2MpJnFgBuuPwC7E+DP3NTZ8w7wDWx5zb1n2KLufgO8BUwN4MDOn04gCAtbtn+9JwHwAKjQETBOCfEigOsrwNwi/RiiEilhiz03L69A2H/zORQxDeyH5YpqnnMA5yh7rOkv3KHSLE5ztQB0oBrtIstvgevrH8bLUCCc6C0Bvtz0/vtj7kotUYbZgieAPWzZLVlomQ8EE8Jw5WzB+4aSjlHg/wHIBdPoIDAWpQDcNbyTCUX/f78JSXwgWXH7CKRdDXhBIPEpmJTiD1XIg8CaMkGisiiKeQXSUq6fWbKEgdITFWdcvAIDBG0HxTEpkkvDRwQ/+ofq9X5A8rHzOW58eNHCFqTGr0OugAZEYWBrAYj9YwuAjbdg2sbR9c12Ue9XQNnGrQGgauO2AMh2UWsAqNq4FQB0XRQPEE61NAXJrYINR8vmI5xry5P/CyJ41LiE3zicJP8QHMCCFIwqCNt3yRZoICgJr1wEj2PlG0u8qyFo3+aWAAAAAElFTkSuQmCC'],
    ['6', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAcdJREFUWEfFV9F1wjAMPHeJJl+FSQqTFE8CncRs0jBJ06+kS9Q8OQTiGFsS8Kh/o8gnWbqTDLTHdVvA7IS/tYBfw9Ztzt4IHQ1mrv8CsFL9AxRByAC4bnG52DglgAa2Wt+XgXPknlL/A5itDIRpYF9tyZbPQPLm4U0bGQDeSgDg1wF+c3Hll6Wi4q+MLQQA5oX3fADfAKgIh2MrHrQiDbwz1/vI3z8DaGGrpSJA1rScgdD/hp5gPMWeZm+7YsABWAGG2O90zJ7ray0IDsAGmDLf8wHMMuAtbL3XRvkgJgw0fIgzknVNAkRgsyp4flRRNK4jBaSC1AgRK8V0N88DZOU6ouI3xRxAfzWSLPAABiVcBGfAuxDEcPnYQQXuYLog0gEdCUUMmi9eDsBtOhBqRsYfHICpDsgzEGpmWrB+B1t/Xiv4PIB7aPhBAMRpTCJLp6gsgZUycDsNu2SKyo5xCgD5d0wzIB/jSgBmC4hCB5L9IT/GFQAkUciFyPXi9tUAkE/DEYCyhAvb0NNmQzQ8Gc9zMmYa4G+imuU9QjCQ0G738hHvBpyGBummc+CWGIEYzVmNu3z8LtsfeACDHEtX8tMAUl7JpyEcAe+L2SHMimnMAAAAAElFTkSuQmCC'],
    ['7', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAVtJREFUWEfdl9FxwyAMhn+8RO23ZJImk9SaxMkkZJNmk/Jmd4nSw+YCdi4IfEDvyrNifRHSrx+BmCOnTwCnmNB1jD4DUKBOvfqtYD+6L7kCNAHNB/Bz3Q8gxwMgZOK/V6D2iAe4Pu4HMOWZIZoB0Ae2WhAK9EYuOQBqg1Xmr4DPuo7YXtkfAGiPaLmOwClRAR/gDmrNJLw8eQGWpv1y2cRt7omKACdAGM2wpz5Ab8fWAugLqLvWrMAWgEDdrSbAAIiLS6hrA3xLQPcewBnU3StW4AkgKMMGrOAY8hOQH2DZHT3QvHPz/xjUVKln4+U4zDHM+JUBWC0iXgPyX4GcvD1QuwfkmCzDeSswN9/snqJluDQAq4L/DmC7B1gZzlyBdBnODLB9vITteH4hkpOxYs66M264NADrhksAJLnhwgBxMpyvCd3zzbohHTWC+QAWH2Afstq8hoM2zF/pv1t3nSExT+TCAAAAAElFTkSuQmCC'],
    ['8', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAetJREFUWEe1l8F5wjAMhZ9ZonAqbFImAU8CTGI2KZ2k6Sl0ChcFB2zHtqT0I2fb+S3J70kGms/1H4D5FG7pAG9hV5fWeiM8DND9fDyWhZABDD9HF26/FkPDHwF8DXvtqivt4wGeN78MIYVxAAQQ/gTgHTAE0cEuNzMBrv650R9hV3Qw/7l+H2DDWr8t1UM7AtNDFAC/DvD7CH5TSoMWgKr6zF//Fnx3pddCtTNGYBbAIeRwPEQD8J3Uil0WL8tEYBLGYh6LEXHXlwAUw1gBiIp37ivI81gJowDgArvc6p+hMIyTg12/BgylIHzmDPtm/wtQFZMCQOYZ8wGip1Q/hAcoixDt43RgDGWQ4cUB8NHbrimCD1pBMtxWT4kXBN2Pc8pKEbkgQfxwwiUFoEhI+4Cn9jdc8FGezbs8nHCw1Z/UXKo77z0AFrt7utpNCVMDiRMqVDBR0KoGtIvQ9bkPKABkMswAyOxUoIJN/ainQGinAoC5KZCHMYFQyDCTggTgJTLMAcR22gxjFoG8F2y2ca0aiABUPpADNLuoMsBkCFEBqNo4IYCmHdc93xoAaT8NIOR85IQnoQwjG17Y2mnUAHU12N1HK5URBS8wh1obFhettB9g/TddIE+ZxI6pqGjCEcyDNMD6s3h8u1H/ATIgDzCaZ3dKAAAAAElFTkSuQmCC'],
    ['9', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAchJREFUWEfdl8F5wjAMhZ9ZonCDSVomAU8CTOJsUpik9BS6RN1PTkKcOLLklnAoV+Tkz5P0JBtof65eA4sD4PeKI1fAV7CrkxRrpIDwf3i5+VDFDoK8hV1VuXMygKvfALw2DzFHPYSpgG9SYJdTIg8QXm7eATSSNhCKFITYS3SWlDhPwQsAN5J93R68wi43KgWSlJkK9sX+BsBHh0oA9oBx/Vl/5NLAK5AW3hl2uVUq8BCALv/tO3kZEyhXH4YFy3dDToHRV5QAfLmhX/hteRG6Wi1jqkACsIFdXcuKsEDGFOBGrUv+0f780wHi9gXskk11pgb0Mk4o8AiApAZYGScAIv/IF6/kA2Qma8BbYLEDfJRXzhEGNix6hzQLWhsOrqZ4+b3oaGhduNaL0TXTkEYxVXU3ExRmSIrhzLVeGQBFN7asVMGTXbfx/AzoIGQFFN87COlHeOcBrAuG4V76fDHeJe2b3YqeAZBt3xkA9DY8UwoGW1TWhv8tQNEaN0cNxAB/tGKx50YBBdvwPEaUmhC7DesBms1IcRmhR94vLzSMVGu8dDEZrVZiTrob1Kd0J5QVaPJZOAVDZ7O3oLKltJ+CWgj1lTwG+QHAPNshd5WqWAAAAABJRU5ErkJggg==']
])