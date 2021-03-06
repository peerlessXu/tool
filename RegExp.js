/* 常用正则表达式 */
表单验证时使用RegExp.test(string),返回ture|false

// 下面操作符的优先级从上至下，由高到低。
// 1.转义符 \
// 2.括号和方括号 (...)、(?:...)、(?=...)、(?!...)、[...]
// 3.量词限定符 {m}、{m,n}、{m,}、?、*、+
// 4.位置和序列 ^ 、$、 \元字符、 一般字符
// 5. 管道符（竖杠）|


// 手机号
/^1[34578]\d{9}$/

// 18位身份证号
/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/

// 逻辑：
// 1）6位地区号：首位非0，后五位数字。对应正则：[1-9][0-9]{5}
// 2）4位年：19或20开头，后两位数字。对应正则：(19|20)[0-9]{2}
// 3）4位月日：
// 　　i)大月31天。对应正则：(01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)
// 　　ii)小月30天。对应正则：(04|06|09|11)(0[1-9]|[1-2][0-9]|30)
// 　　iii)2月28天或29天。对应正则：02(0[1-9]|[1-2][0-9])
// 4）3位编号：三位数字。对应正则：[0-9]{3}
// 5）1位新生成编号：数字或x。对应正则：([0-9]|x|X)

// 现仅剩以下缺点（不太用到）：
// 1）未匹配闰年
// 2）未匹配前三位地区编号是否存在

// 邮箱
/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/

// 比如我们把字符串的开头和结尾用"#"替换（位置可以替换成字符的！）
var result = "hello".replace(/^|$/g, '#');
console.log(result); 
// => "#hello#"

// 比如一个文件名是"[JS] Lesson_01.mp4"中的\b，如下
var result = "[JS] Lesson_01.mp4".replace(/\b/g, '#');
console.log(result); 
// => "[#JS#] #Lesson_01#.#mp4#"

// 比如(?=l)，表示'l'字符前面的位置
var result = "hello".replace(/(?=l)/g, '#');
console.log(result); 
// => "he#l#lo"

// 而(?!p)就是(?=p)的反面意思
var result = "hello".replace(/(?!l)/g, '#');
console.log(result); 
// => "#h#ell#o#"

// 把"12345678"，变成"12,345,678"
var string1 = "12345678",
string2 = "123456789";
reg = /(?!^)(?=(\d{3})+$)/g;
var result = string1.replace(reg, ',')
console.log(result); 
// => "12,345,678"
result = string2.replace(reg, ',');
console.log(result); 
// => "123,456,789"


