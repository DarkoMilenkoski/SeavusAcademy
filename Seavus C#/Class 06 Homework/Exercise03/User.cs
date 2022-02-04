using System;
using System.Collections.Generic;
using System.Text;

namespace Exercise03
{
    public class User
    {
        public string Name { get; set; }
        public long Number { get; set; }
        public int Pin { get; set; }
        public int Balance { get; set; }

        public User(string name, long number, int pin, int balance)
        {
            Name = name;
            Number = number;
            Pin = pin;
            Balance = balance;
        }

        public int CheckBalance()
        {
            return Balance;
        }
        public int CashWithdrawal(int cash)
        {
            Balance -= cash;
            return Balance;
        }
        public int CashDeposit(int cash)
        {
            Balance += cash;
            return Balance;
        }
    }
}
