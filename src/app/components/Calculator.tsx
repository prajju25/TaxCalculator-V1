import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Tooltip  from "@mui/material/Tooltip";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { TaxComponent } from "../interface/TaxComponent";
import { setTaxData } from "../redux/actions/tax.actions";
import { connect } from "react-redux";

const Calculator = () => {

    const [components, setComponents] = useState([
        {
            name: "Gross Salary",
            value: 0,
            function: addAllValues,
            subComponents: [
                {
                    name: "Basic",
                    value: 0
                },{
                    name: "HRA",
                    value: 0
                },{
                    name: "Other Allowance",
                    value: 0
                },{
                    name: "Variable Pay",
                    value: 0
                },{
                    name: "Stat Bonus (Gratuity, Company rewards)",
                    value: 0
                },{
                    name: "Gift Voucher/Cards",
                    value: 0
                },{
                    name: "On Call Allowance",
                    value: 0
                }
            ]
        },{
            name: "HRA Exemption",
            value: 0,
            function: calcHRAExempt,
            subComponents: [
                {
                    name: "Enter Rent paid per annum",
                    value: 0
                },
                {
                    name: "Basic Salary",
                    value: 0
                },
                {
                    name: "HRA Received",
                    value: 0
                }
            ]
        },{
            name: "Other Exemptions",
            value: 0,
            function: addAllValues,
            subComponents: [
                {
                    name: "LTA",
                    value: 0
                },
                {
                    name: "Communication & Others",
                    value: 0
                }
            ]
        },{
            name: "Section 16 Deduction",
            value: 52400,
            function: addAllValues,
            subComponents: [
                {
                    name: "Standard Deduction",
                    value: 50000,
                    disabled: true
                },
                {
                    name: "Professional tax",
                    value: 2400,
                    disabled: true
                }
            ]
        },{
            name: "Other Incomes",
            value: 0,
            function: calcOtherIncomes,
            subComponents: [
                {
                    name: "Income from Self Occupied Property",
                    value: 0
                },
                {
                    name: "Loss from House Property",
                    value: 0,
                    maxValue: 200000,
                    tooltip: "Limit: 200000"
                }
            ]
        },{
            name: "80C Deduction",
            value: 0,
            function: addAllValues,
            maxLimit: 150000,
            tooltip: "Limit: 150000",
            subComponents: [
                {
                    name: "PF/PPF",
                    value: 0
                },{
                    name: "Life Insurance Premium",
                    value: 0
                },{
                    name: "ULIP",
                    value: 0
                },{
                    name: "ELSS",
                    value: 0
                },{
                    name: "Tuition Fees",
                    value: 0
                },{
                    name: "NPS Scheme",
                    value: 0
                },{
                    name: "NSC",
                    value: 0
                },{
                    name: "Pension Plan/Fund",
                    value: 0
                },{
                    name: "Sukanya Samurudhi Yojana",
                    value: 0
                },{
                    name: "Fixed Deposits or Other Deposits",
                    value: 0
                }
            ]
        },{
            name: "80 CCD - NPS",
            value: 0,
            function: addAllValues,
            tooltip: "Note: Do not add if you have already covered it in 80C Section",
            subComponents: [
                {
                    name: "80CCD(1B) - Additional contribution to NPS",
                    value: 0,
                    maxValue: 50000,
                    tooltip: "Limit: 50000"
                },{
                    name: "80CCD(2) - Employer's contribution to NPS account",
                    value: 0,
                    tooltip: "Maximum up to 10% of salary"
                }
            ]
        },{
            name: "80 EE & EEA",
            value: 0,
            function: addAllValues,
            maxLimit: 150000,
            tooltip: "Limit: 150000",
            subComponents: [
                {
                    name: "Interest on Education Loan",
                    value: 0,
                    tooltip: "Interest paid for a period of 8 years"
                },{
                    name: "Interest on Home Loan",
                    value: 0
                }
            ]
        },{
            name: "80D - Medical Insurance",
            value: 0,
            function: addAllValues,
            subComponents: [
                {
                    name: "80D - Medical Insurance",
                    value: 0,
                    maxLimit: 25000,
                    tooltip: "For Self, spouse, children & parents. Limit: 25000"
                },{
                    name: "80D - Medical Insurance - Senior Citizens",
                    value: 0,
                    maxLimit: 50000,
                    tooltip: "For parents above 60yrs. Limit: 50000"
                },{
                    name: "80DD - Dependent Disability (40% to 80%)",
                    value: 0,
                    maxLimit: 75000,
                    tooltip: "Disability is 40% or more but less than 80%. Limit: 75000"
                },{
                    name: "80DD - Dependent Disability (>80%)",
                    value: 0,
                    maxLimit: 125000,
                    tooltip: "Disability is 80% or more. Limit: 125000"
                },{
                    name: "80DDB - Medical Expenditure (<60 yrs)",
                    value: 0,
                    maxLimit: 40000,
                    tooltip: "Medical Expenditure on Self or Dependent Relative for diseases specified in Rule 11DD. Limit: 40000"
                },{
                    name: "80DDB - Medical Expenditure (>60 yrs)",
                    value: 0,
                    maxLimit: 100000,
                    tooltip: "Medical Expenditure on Self or Dependent Relative for diseases specified in Rule 11DD. Limit: 100000"
                },{
                    name: "80U - Self-suffering from disability",
                    value: 0,
                    maxLimit: 75000,
                    tooltip: "An individual suffering from a physical disability (including blindness) or mental retardation. Limit: 75000"
                },{
                    name: "80U - Self-suffering from disability",
                    value: 0,
                    maxLimit: 125000,
                    tooltip: "An individual suffering from severe disability. Limit: 125000"
                }
            ]
        },{
            name: "80 G - Donations",
            value: 0,
            function: addAllValues,
            subComponents: [
                {
                    name: "80G - Donations",
                    value: 0
                },{
                    name: "80GGB - Contribution by companies to political parties",
                    value: 0
                },{
                    name: "80GGC - Contribution by individuals to political parties",
                    value: 0
                }
            ]
        },{
            name: "Other Deductions",
            value: 0,
            function: addAllValues,
            subComponents: [
                {
                    name: "80 EEB - Interest Paid on Electric Vehicle Loan",
                    value: 0,
                    maxLimit: 150000,
                    tooltip: "Limit: 150000"
                },{
                    name: "80TTA(1) - Interest Income from Savings account",
                    value: 0,
                    maxLimit: 10000,
                    tooltip: "Limit: 10000"
                },{
                    name: "80TTB - Exemption for interest from banks/post office, etc",
                    value: 0,
                    maxLimit: 50000,
                    tooltip: "Applicable only to senior citizens. Limit: 50000"
                },{
                    name: "Other Deductions",
                    value: 0
                }
            ]
        }
    ]);

    function addAllValues(items: Array<TaxComponent>) {
        let result = 0;
        items.forEach(i=>result+=i.value);
        return result;
    }

    function calcHRAExempt(items: Array<TaxComponent>) {
        let rentPaid = items[0].value;
        let basic = items[1].value;
        let val = Math.ceil(rentPaid - (.10 * basic));
        let hraExempt = val < items[2].value ? val : items[2].value;
        return hraExempt;
    }

    function calcOtherIncomes (items: Array<TaxComponent>) {
        return items[0].value - items[1].value;
    }

    const updateValue = (val: number, field: string, subField: string) => {
        let tempArr = [...components];
        let index = tempArr.findIndex(t=>t.name===field);
        let subComp = {...tempArr[index]};
        let subIndex = subComp.subComponents.findIndex(t=>t.name===subField);
        subComp.subComponents[subIndex].value = val;
        tempArr[index] = subComp;
        tempArr[index].value = tempArr[index].function(tempArr[index].subComponents);
        setComponents(tempArr);
    }

    return (
        <div className="tax-calculator">
            <div className="calculator-head">
                <h1>Tax Calculator</h1>
            </div>
            <div className="calculator-body">
                {components.map((comp)=>(
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <Grid container>
                                <Grid item xs={9}>
                                    {comp.name}
                                    {comp.tooltip ?
                                        <Tooltip title={comp.tooltip} className="tooltip-comp">
                                            <HelpCenterIcon/>
                                        </Tooltip>
                                    : null}
                                </Grid>
                                <Grid item xs={3}>
                                    {comp.value}
                                </Grid>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            {comp.subComponents.map((sub : TaxComponent)=>(
                                <Grid container>
                                    <Grid item xs={9}>
                                        {sub.name}
                                        {sub.tooltip ?
                                            <Tooltip title={sub.tooltip} className="tooltip-comp">
                                                <HelpCenterIcon/>
                                            </Tooltip>
                                        : null}
                                    </Grid>
                                    <Grid item xs={3}>
                                        {sub.disabled ?
                                        <TextField 
                                        disabled
                                        id="filled-disabled"
                                        variant="standard"
                                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                        defaultValue={sub.value}
                                        />
                                        :
                                        <TextField 
                                        id="standard-basic"
                                        variant="standard"
                                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                        value={sub.value}
                                        onChange={e=>{
                                            let val = Number(e.target.value.replace(/\D+/g, ''));
                                            val = sub.maxValue && val > sub.maxValue ? sub.maxValue : val;
                                            updateValue(val, comp.name, sub.name)
                                        }}
                                        />
                                        }
                                    </Grid>
                                </Grid>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch: any) => ({
    currentUser: (taxData: any) => dispatch(setTaxData(taxData))
});    
export default  connect(mapDispatchToProps)(Calculator);