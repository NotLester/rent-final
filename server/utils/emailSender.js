import dotenv from "dotenv"; //to use environment variables
import nodemailer from "nodemailer";
dotenv.config();

const transporter = nodemailer.createTransport({
	service: "gmail",
	host: process.env.EMAIL_HOST,
	port: process.env.EMAIL_PORT,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

/**
 * Send email using nodemailer transporter GMAIL
 */
export const sendEmail = async (to, from, subject, body) => {
	try {
		await transporter.sendMail({
			from,
			to,
			subject,
			html: body,
		});
	} catch (error) {
		console.log(error);
	}
};
