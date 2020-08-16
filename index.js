const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

// const carousel = require("./router/carousel/carousel");
// const makeAnImpact = require("./router/makeImpact/makeImpact");
// const recommendAnExchange = require("./router/recommendAnExchange/recommendAnExchange");
// const investmentDashboard = require("./router/investmentDashboard/investmentDashboard");
// const myAccount = require("./router/myAccount/myAccount");
// const investmentOptionUST = require("./router/investmentOptionUST/investmentOptionUST");
// const investmentOptionDrupal = require("./router/investmentOptionDrupal/investmentOptionDrupal");
// const dropdownValues = require("./router/npaccount/dropdownValues");
// const userDetails = require("./router/npaccount/userDetails");
// const contributionActivity = require('./router/contributionActivity/contributionActivity');
// const getFundDetails = require('./router/makeAContribution/getFundDetails');
// const InvestmentAllocation = require('./router/makeAContribution/InvestmentAllocation');
// const generateAccessKey = require('./router/makeAContribution/generateAccessKey');
// const loggedInAddress = require('./router/makeAContribution/loggedInAddress');
// const viewContribution = require('./router/viewContribution/viewContribution');
// const additionalDetails = require('./router/makeAContribution/findAdditionalDetails');
// const yearWiseBalance = require('./router/makeAContribution/yearWiseBalance');
// const step1Info = require('./router/makeAContribution/step1info');
// const step1Notice = require('./router/makeAContribution/step1Notice');
// const step2Notice = require('./router/makeAContribution/step1Notice');
// const disclaimerStep3 = require('./router/makeAContribution/disclaimerStep3');
// const wiringInstructions = require('./router/makeAContribution/wiringInstructions');
// const viewContribNotice = require('./router/viewContribution/noticeViewContribution');

// const searchCharity = require("./router/searchCharity/searchCharity");
// const MyProfile = require("./router/MyProfile/MyProfile");
// const changeSecurity = require("./router/changeSecurity/changeSecurity");
// const forgotUserId = require("./router/forgotUserId/forgotUserId");
// const forgotPasswordAuth = require("./router/forgotPassword/forgotPasswordAuth");
// const validateChallenge = require("./router/validateChallenge/validateChallenge");
// const messages = require("./router/messages/messages");
// const allmessages = require("./router/messages/allmessages");

// const exchanges = require("./router/exchanges/exchanges");
// const exchangeActivity = require("./router/exchangeActivity/exchangeActivity");
// const needAssistance = require("./router/needAssistance/needAssistance");
// const newSingleExchange = require("./router/recommendAnExchange/newSingleExchange/newSingleExchange");
// const accountSumary = require("./router/accountSummary/accountSummary");
// const adminSearchData = require("./router/adminSearch/adminSearch");
// const allPooldata = require("./router/recommendAnExchange/investmentAllDetails/investmentAllDetails");
// const contributionDashbaord = require("./router/contributionsDashboard/contributionDashboard");
// const grantsDashboard = require("./router/grantDashboard/grantDashboard");
// const grantsActivity = require('./router/grantsActivity/grantsActivity');
// const transactionSummary = require('./router/transactionSummary/transactionSummary');
// const grantAgreement = require('./router/grantAgreement/grantAgreement');
// const documentCentre = require('./router/documentcentre/documentcentre');
// const DrupalContentRouter = require('./router/drupalContents/index');
const studentDetails = require("./router/student-details/student-details");

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());
//app.use("/viewContribution", viewContribution);

app.use("/", studentDetails);
// app.use('/', carousel)
// app.use('/',grantsActivity)
// app.use('/',exchangeActivity)
// app.use('/',exchanges);
// app.use('/', makeAnImpact)
// app.use('/search', searchCharity)
// app.use('/', recommendAnExchange)
// app.use('/', allPooldata)
// app.use('/', investmentDashboard)
// app.use('/', myAccount)
// app.use('/', investmentOptionUST)
// app.use('/', investmentOptionDrupal)
// app.use('/contributionActivity', contributionActivity)
// app.use('/makeAContribution/allocations',InvestmentAllocation)
// app.use('/makeAContribution/fundDetails',getFundDetails)
// app.use('/makeAContribution/accessKey',generateAccessKey)
// app.use('/makeAContribution/Address',loggedInAddress)
// app.use('/makeAContribution/additional',additionalDetails)
// app.use('/makeAContribution/Balance',yearWiseBalance)
// app.use('/makeAContribution/info', step1Info)
// app.use('/documentCentre', documentCentre)
// app.use('/npaAccount/userDetails',userDetails)
// app.use('/npaAccount/dropdownValues',dropdownValues)
// app.use('/notices/PageMake_a_Contribution', step1Notice)
// app.use('/notices/PageMake_a_Contribution2', step2Notice)
// app.use('/notices/PageView_Contribution',viewContribNotice)
// app.use('/disclaimers/PageMake_a_Contribution3', disclaimerStep3)
// app.use('/api/contribution-flow/NameWiring-Instructions', wiringInstructions)
// app.use('/', MyProfile)
// app.use('/',changeSecurity)
// app.use('/', forgotUserId)
// app.use('/', forgotPasswordAuth)
// app.use('/', validateChallenge)
// app.use('/', needAssistance)
// app.use('/', messages)
// app.use('/',allmessages)
// app.use('/', newSingleExchange)
// app.use('/', adminSearchData)
// app.use('/', transactionSummary)
// app.use('/', accountSumary)
// app.use('/documentCentre', documentCentre);
// app.use('/grantAgreement', grantAgreement);
// app.use("/", contributionDashbaord);
// app.use("/", grantsDashboard);
// app.use('/viewContribution',viewContribution)
// app.use('/contributionActivity', contributionActivity)
// app.use('/grantAgreement', grantAgreement)
// app.use('/', DrupalContentRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
