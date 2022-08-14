function taxCollect(amount)
{
    if (amount<250000)
    {
        return 0;
    }
    if (amount>=250000 && amount<500000)
    {
        let tax= amount*20/100;
        return tax;
    }
    if (amount>=500000 && amount<1000000)
    {
        let tax= amount*20/100;
        return tax;
    }
    if (amount>=1000000)
    {
        let tax= amount*30/100;
        return tax;
    }
};

module.exports= taxCollect;