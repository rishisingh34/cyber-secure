const mailer = require("nodemailer");
const { EMAIL, PASS } = require("../config/env.config");

const sendBankMail = async (email,acknowledgementNumber, userImageUrl , evidenceImageUrl) => {
  const transporter = mailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: EMAIL,
      pass: PASS,
    },
  });

  const noticeHtml = `
    <p>Dear Bank,</p>
    <p>We have received a request to freeze the bank account related to a case with Acknowledgement Number : ${acknowledgementNumber} Please review the details below:</p>
    <p><strong>User Information:</strong></p>
    <img src="${userImageUrl}" alt="User Image" style="max-width: 100%;" />
    <p><strong>Evidence:</strong></p>
    <img src="${evidenceImageUrl}" alt="Evidence Image" style="max-width: 100%;" />
    <p>This request requires your attention within 24 hours.</p>
    <p>Please take one of the following actions:</p>
    <button onclick="freezeAccount()">Freeze Account</button>
    <button onclick="denyRequest()">Deny Request</button>
    <div id="denyReason" style="display:none;">
      <p>Please provide a reason for denial:</p>
      <textarea id="denialReason" rows="4" cols="50"></textarea>
      <button onclick="submitDenialReason()">Submit</button>
    </div>
    <script>
      function freezeAccount() {
        // redirect to verify 
      }

      function denyRequest() {
        document.getElementById("denyReason").style.display = "block";
      }

      function submitDenialReason() {
        const denialReason = document.getElementById("denialReason").value;
        // Implement logic to handle denial reason submission
        alert("Denial Reason Submitted: " + denialReason);
      }
    </script>
  `;

  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "Account Freeze Request",
    html: noticeHtml,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      // console.log("Email Sent: " + info.response);
    }
  });
};

module.exports = { sendBankMail };
