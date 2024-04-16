function chuyendoi(){
    let c = parseFloat(document.getElementById("c").value);
    let f = c * 9/5 +32;
    document.getElementById('convert').innerHTML = c + " độ C bằng " + f +" độ F"
}
function convert_ft(){
    let m = parseFloat(document.getElementById("m").value);
    let ft = m * 3.2808
    document.getElementById('ft').innerHTML = m + " m bằng "+ ft +" ft";
}
function dt_vuong(){
    let a = parseFloat(document.getElementById("a").value);
    let dt = a *a;
    document.getElementById('kq').innerHTML = "Diện tích hình vuông có cạnh "+ a+" là: "+dt;
}
function dt_cn(){
    let a = parseFloat(document.getElementById("cn_a").value);
    let b = parseFloat(document.getElementById("cn_b").value);
    let dt = a * b;
    document.getElementById('dt_cn').innerHTML = "Diện tích hình chữ nhật có cạnh "+ a+", "+b+" là: "+dt;
}
function dt_tgv(){
    let a = parseFloat(document.getElementById("tg_a").value);
    let b = parseFloat(document.getElementById("tg_b").value);
    let dt = 1/2 * (a * b);
    document.getElementById('dt_tgv').innerHTML = "Diện tích hình tam giác vuông có cạnh "+ a+", "+b+" là: "+dt;
}
function giaiptbac1(){
    let a = parseFloat(document.getElementById("gt_a").value);
    let b = parseFloat(document.getElementById("gt_b").value);
    let nghiem;
    if(a == 0){
        nghiem = "Phương trình vô nghiệm"
    }else if (b == 0){
        nghiem ="Phương trình vô số nghiệm"
    }else {
        nghiem = -b /a ;
    }
    document.getElementById('kq_pt1').innerHTML = "Giải phương trình: "+ a+"x"+'+'+b +" = 0 là : "+ nghiem
}
function giaiptbac2(){
    let a = parseFloat(document.getElementById("gt2_a").value);
    let b = parseFloat(document.getElementById("gt2_b").value);
    let c = parseFloat(document.getElementById("gt2_c").value);
    let ng;
    let delta;
    if(a == 0){
        ng = -c / b;
        document.getElementById('kq_pt2').innerHTML = "Phương trình có một nghiệm là : "+ng;
    }else if (b == 0 && c == 0){
        document.getElementById('kq_pt2').innerHTML = "Phương trình có vô số nghiệm "
    }else {
        document.getElementById('kq_pt2').innerHTML = "Phương trình vô nghiệm "
    }
    delta = b*b - 4*a*c;
    if(delta > 0){
        let x1 = (-b + Math.sqrt(delta))/(2*a);
        let x2 = (-b - Math.sqrt(delta))/(2*a);
        document.getElementById('kq_pt2').innerHTML = "Phương trình "+a+"x<sup>2</sup>+"+b+"x+"+c+"= 0 có hai nghiệm phân biệt là :"+x1+ " và "+x2;
    }else if(delta = 0){
        document.getElementById('kq_pt2').innerHTML = "Phương trình"+a+"x<sup>2</sup>"+b+"x"+c+"= 0 có  nghiệm kép phân biệt là : x1 = x2 ="+ (-b/2*a)
    }else {
        document.getElementById("kq_pt2").innerHTML = "Phương trình vô nghiệm"
    }
}
function kt_age(){
    let age = +document.getElementById("age").value;
    let kq;
    if(age <= 120 && age > 0){
        kq = "Là tuổi của một người"
    }else {
        kq = "Không phải là tuổi của người"
    }
    document.getElementById('age_nguoi').innerHTML = kq;
}
function kt_tg(){
    let a = parseFloat(document.getElementById("soa").value);
    let b = parseFloat(document.getElementById("sob").value);
    let c = parseFloat(document.getElementById("soc").value);
    let result;
    if((a > 0 && b > 0 && c > 0) || a + b > c || b + c > a || a + c > b ){
        result = "Ba số thực trên là ba cạch của một tam giác"
    }else {
        result = "Ba số thực trên không là ba cạch của một tam giác"

    }
    document.getElementById('tg').innerHTML = result;
}