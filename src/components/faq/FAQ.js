import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	Link,
	Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink as RouterLink } from 'react-router-dom';

const questions = [
	{
		q: 'How long will it take me to get my medical marijuana card?',
		r: (
			<>
				<Typography paragraph>
					If you have a DMV-issued New York State ID (driver license, driver
					permit, or non-driver ID), a printable temporary card in pdf format
					will be available immediately after you register with the NYS
					Department of Health on the{' '}
					<Link href='https://my.ny.gov/'>my.ny.gov website</Link>. The
					temporary card will be active, effective immediately, for 30 days. At
					the same time, a permanent card will be printed and mailed out to you
					in 1-2 weeks.
				</Typography>

				<Typography paragraph>
					If you do not have a DMV-issued NYS ID, you will need to submit
					additional supporting documents when registering to prove your NYS
					residency (like a utility bill, lease copy, or landlord letter). If
					these documents are not under your name, the person who the utility
					bill or lease copy is under can write a letter stating that you live
					there. You will also be asked to submit a passport style photograph of
					yourself (basically a selfie, above the shoulders against a plain
					background) as well as any other government-issued ID (such as other
					State ID or passport). These documents don’t need to be submitted to
					us, but you will need them when you register online with the NYS
					Department of Health for your card, so it is a good idea to have them
					scanned and ready to upload when starting your registration. It will
					take the NYS DOH about 3 business days to review the documents, after
					which your temporary card will become available on your{' '}
					<Link href='https://my.ny.gov/'>my.ny.gov website</Link> account under
					the menu option “My Temporary Card.
				</Typography>

				<Typography paragraph>
					At the time of your visit, complimentary in-person guidance for the
					registration process will be available if you need assistance with
					account creation/recovery and navigation on the{' '}
					<Link href='https://my.ny.gov/'>my.ny.gov website</Link>
				</Typography>
			</>
		),
	},

	{
		q: 'Where can I find a dispensary?',
		r: (
			<>
				<Typography paragraph>
					For your convenience, we have compiled a list of all dispensaries
					currently located in or coming soon to the New York City area which
					can be found at this link. This list is continuously updated as new
					information becomes available. In addition to this list, a plethora of
					details and inside tips regarding delivery options, personalized
					recommendations on specific product listings, and pricing information
					will be made available to you at the time of your consultation. We do
					the research, so you don’t have to.
				</Typography>

				<Typography paragraph>
					If you are looking for a dispensary elsewhere in New York State (not
					in NYC), you may want to look at the state-wide list of dispensaries
					located on the NYS DOH website here:{' '}
					<Link href='https://www.health.ny.gov/regulations/medical_marijuana/application/selected_applicants.htm'>
						NYS DOH website
					</Link>
				</Typography>
			</>
		),
	},
	{
		q: 'Which medical conditions qualify for the NYS Medical Marijuana Program?',
		r: (
			<>
				<Typography paragraph>
					Currently, thirteen medical conditions qualify for the NYS Medical
					Marijuana Program:
				</Typography>

				<Typography paragraph>
					1. Chronic pain
					<br />
					2. Opioid replacement"
					<br />
					3. Cancer
					<br />
					4. Post-traumatic stress disorder (PTSD)
					<br /> 5. Neuropathy
					<br /> 6. Epilepsy
					<br /> 7. HIV/AIDS
					<br /> 8. Spinal cord injury
					<br /> 9. Inflammatory bowel disease
					<br /> 10. Parkinson’s disease
					<br /> 11. Amyotrophic lateral sclerosis (ALS)
					<br /> 12. Multiple sclerosis
					<br /> 13. Huntington’s disease
					<br />
				</Typography>

				<Typography paragraph>
					Patients must also have one of the following associated or
					complicating conditions: cachexia or wasting syndrome, severe or
					chronic pain, severe nausea, seizures, or severe or persistent muscle
					spasms, PTSD or opioid use disorder (only if enrolled in a certified
					substance use disorder treatment program).
				</Typography>
			</>
		),
	},
	{
		q: 'How do I make an appointment?',
		r: (
			<>
				<Typography paragraph>
					Feel free to contact us directly anytime, day or night, seven days a
					week, with any questions you have or to arrange an appointment. There
					are four ways (all equally effective) to get into contact with us:
				</Typography>

				<Typography sx={{ a: { color: '#2d51a3' } }} paragraph>
					Call or text us at (123) 456-7890
					<br />
					Email us at{' '}
					<a href='mailto: ask@cannabismd.demo'>ask@cannabismd.demo</a>
					<br />
					Submit a web contact form through our website
				</Typography>

				<div>
					<Button
						variant='contained'
						color='primary'
						to='/appointment'
						component={RouterLink}
					>
						<span>Schedule office visit</span>
					</Button>
				</div>
			</>
		),
	},
	{
		q: 'What if I am unable to visit the office because I live too far away or have restricted mobility due to a medical condition?',
		r: (
			<>
				<Typography paragraph>
					While all patients are encouraged to make a visit in-person to our
					office in Downtown Brooklyn for their initial evaluation, house calls
					are offered as a courtesy to patients who request it. To be eligible
					for house calls, you must live in one of the five boroughs of NYC. A
					nominal fee for travel distance and time will also apply.
				</Typography>

				<Typography paragraph>
					If you live in another part of New York State and distance represents
					a significant obstacle to coming to our office, online medical
					marijuana evaluations by Doctor Placeholder are conveniently offered
					via the doxy.me telemedicine website. Find the link below to enter an
					online evaluation.
				</Typography>

				<div>
					<Button
						variant='contained'
						to='/online-evaluation'
						component={RouterLink}
					>
						Online evaluation
					</Button>
				</div>
			</>
		),
	},
	{
		q: 'Is marijuana addictive?',
		r: (
			<>
				"Unlike alcohol, opiates, or benzodiazepines, marijuana is not
				considered to be chemically or physically addictive (although there is
				mounting evidence that there may be a significant physical process of
				withdrawal that occurs in very heavy, chronic users of marijuana).
				Marijuana can be considered to be a significantly safer alternative to
				those drugs mentioned above. Psychological dependence on marijuana,
				however, is not uncommon and is a serious risk to consider. As such,
				marijuana should be used responsibly.",
			</>
		),
	},
	{
		q: 'How does CBD in medical marijuana differ from over-the-counter CBD that is widely available everywhere?',
		r: (
			<>
				<Typography paragraph>
					Two words: Quality Control. The FDA currently exercises very little
					oversight over hemp-derived CBD products, and as such, the quality and
					labeling of CBD products can be considered to be extremely suspect. Of
					the hemp-derived CBD products tested by the FDA, some did not contain
					any detectable amount of CBD. Some brands of CBD may be considered to
					be more reliable than others, however.
				</Typography>

				<Typography paragraph>
					In addition, the source and production process by which medical CBD
					and over-the-counter CBD differs drastically. Medical grade CBD is
					extracted from the flower, leaves, and stalk of the marijuana plant
					through a solvent extraction process. Hemp-derived CBD on the other
					hand is produced by pressing the seeds of the hemp plant in a process
					akin to that used to produce other common oils, like olive, coconut,
					sesame, and peanut oils.
				</Typography>

				<Typography paragraph>
					THC and CBD products available through the NYS Medical Marijuana
					program undergo very rigorous and regular testing to ensure quality,
					safey, and efficacy. From what I have been told by my patients who
					have tried both medical grade CBD and over-the-counter hemp-derived
					CBD, the difference is unmistakable.
				</Typography>
			</>
		),
	},
	{
		q: 'How much does it cost to become a medical marijuana patient?',
		r: (
			<>
				<Typography paragraph>
					At Cannabis MD, we charge a one-time only, annual fee of $250 dollars
					for the first year of treatment. Your certification will be active for
					exactly one year from the date of your visit. As long as you are
					enrolled in the Medical Marijuana Program, you will be considered a
					patient under our care. This fee allows Doctor Placeholder to provide
					the proper quality of care, follow-up, and ongoing support that his
					patients have to come to expect from him.
				</Typography>

				<Typography paragraph>
					If you are happy with being in the program and wish to recertify, the
					fee for returning patients is just $150 for each year after the first.
				</Typography>

				<Typography paragraph>
					We do respect patients' ability to pay. Financial assistance is
					available in the form of sliding scale discounts and payment plans
					based on income and family size with financial documentation required
					for verification.
				</Typography>
			</>
		),
	},
	{
		q: 'How much does medical marijuana cost?',
		r: (
			<>
				<Typography paragraph>
					Currently, medical marijuana in New York State is not cheap. With
					frequent, daily use, a month’s supply of medical marijuana can be
					expected run you about $200-$250. The high price of medical marijuana
					in New York represents a significant barrier to patient access and is
					most likely the main reason why the NYS Medical Marijuana Program has
					not quickly expanded in a way comparable to the way medical marijuana
					programs in other states have.
				</Typography>

				<Typography paragraph>
					Looking forward to the future, things look a little brighter. NYS
					government officials have acknowledged that the high prices of medical
					marijuana in New York represent a significant barrier to
					accessibility, and lawmakers are looking into ways to expand access to
					patients. A new bill now under consideration in the NYS legislature
					proposes providing health insurance coverage for medical marijuana,
					which makes a whole lot of sense when you consider that drugs like
					OxyContin and Ambien are covered. NYS legislators are also expected to
					make a push for recreational marijuana legalization in 2019, and this
					might be expected to result in significant cost savings for medical
					marijuana patients.
				</Typography>
			</>
		),
	},
	{
		q: 'Will being a medical marijuana patient cause problems with employment?',
		r: (
			<>
				<Typography paragraph>
					Under New York State law, employers are not allowed to discriminate
					against patients in the NYS Medical Marijuana Program. This means you
					should not be fired or refused a job on the basis of your status as a
					NYS medical marijuana patient or on the basis of your legitimate
					medical use of marijuana.
				</Typography>

				<Typography paragraph>
					However, marijuana is still classified at the federal level as an
					illegal, schedule I drug (along the likes of GHB, heroine, LSD, and
					Ecstasy) with no accepted medical use. Protection under NY State law
					may not apply if you are employed by or looking for employment under a
					federal agency (such as the VA, USPS, military, etc.)
				</Typography>
			</>
		),
	},
	{
		q: 'Can I use my NYS medical marijuana card elsewhere?',
		r: (
			<Typography paragraph>
				"As a patient in the NYS Medical Marijuana Program, you can go to any
				medical marijuana dispensary in New York State only. Your NYS medical
				marijuana card will not be accepted at dispensaries in any other state.
				The NYS Medical Marijuana does not currently participate in any
				reciprocity arrangements with medical marijuana programs in any other
				state."
			</Typography>
		),
	},
	{
		q: 'Can I travel out-of-state with my medical marijuana?',
		r: (
			<>
				<Typography paragraph>
					This is a very frequently asked question, but one with no clear
					answer. Your NYS medical marijuana card really only technically
					protects you in New York, but patients have frequently reported no
					problems when traveling out-of-state with their medical marijuana.
					Although the TSA, as a federal agency, holds an official policy of
					banning medical marijuana from being carried on flights, anecdotal
					reports have frequently confirmed that TSA officers will usually wave
					passengers with a medical marijuana card through when this becomes an
					issue.
				</Typography>

				<Typography paragraph>
					The legality of medical marijuana where you land should also be
					considered. Law enforcement in other states will frequently lack the
					capability to verify the validity of your NYS medical marijuana card.
					Depending on local policy or attitudes towards marijuana, they may
					even be positively disinclined to do so. However, with national
					awareness and public acceptance of medical marijuana growing, it has
					been become increasingly possible to travel safely with personal use
					amounts of medical marijuana. Finally, it should go without saying: Do
					not travel internationally with medical marijuana. This should not be
					taken as legal advice.
				</Typography>

				<Typography paragraph>
					You should always exercise your own due diligence and make yourself
					aware of the risks of traveling with medical marijuana should you
					choose to do so.
				</Typography>
			</>
		),
	},
];

const FAQ = () => {
	return (
		<>
			{questions.map((question) => (
				<Accordion square key={question.q}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={question.q[0]}
						id={question.q[0]}
					>
						<Typography variant='subtitle1'>{question.q}</Typography>
					</AccordionSummary>
					<AccordionDetails>{question.r}</AccordionDetails>
				</Accordion>
			))}
		</>
	);
};
export default FAQ;
