

module.exports.getDate=getDate;
function getDate(){
    today=new Date();
    day=today.toLocaleDateString("en-US");
    return day;
}