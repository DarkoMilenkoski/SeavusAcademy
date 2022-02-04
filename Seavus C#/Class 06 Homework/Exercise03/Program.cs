using System;
using System.Text.RegularExpressions;

namespace Exercise03
{
    class Program
    {
        
        static void Main(string[] args)
        {
            User[] users = new User[3]
            {
                new User("Darko Milenkoski", 1111111111111111, 1234, 1000),
                new User("Kristijan Gjoreski", 2222222222222222, 5678, 800),
                new User("Luka Radojcic", 3333333333333333, 9012, 1500)
            };

            Regex numberFormat = new Regex(@"^\d{4}-\d{4}-\d{4}-\d{4}$");
            Regex pinFormat = new Regex(@"^\d{4}$");

            Console.WriteLine("Welcome to the ATM app!");
            Login(numberFormat, pinFormat, users);
            
        }

        static void Login(Regex numberFormat, Regex pinFormat, User[] users)
        {
            bool valid = false;
            do
            {
                Console.WriteLine("Please enter your card number:");
                string number = Console.ReadLine();
                Console.WriteLine("Enter pin:");
                string pin = Console.ReadLine();

                if (pinFormat.IsMatch(pin) && numberFormat.IsMatch(number))
                {
                    long cardNumber = long.Parse(number.Replace("-", string.Empty));
                    int cardPin = int.Parse(pin);
                    valid = true;
                    Services(cardNumber, cardPin, users, numberFormat, pinFormat);
                }
                else Console.WriteLine("Invalid credentials.");
            } while (!valid);
        }

        static void Services(long number, int pin, User[] users, Regex numberFormat, Regex pinFormat)
        {
            bool unregistered = true;
            foreach(User user in users)
            {
                if (user.Number == number) unregistered = false;

                if (user.Number == number && user.Pin == pin)
                {
                    Console.WriteLine($"Welcome {user.Name}!\nWhat would you like to do:");
                    bool repeat = false;
                    do
                    {
                        Console.WriteLine("1. Check Balance\n2. Cash Withdrawal\n3. Cash Deposit");
                        string input = Console.ReadLine();
                        switch (input)
                        {
                            case "1":
                                Console.WriteLine($"Your current balance is ${user.CheckBalance()}");
                                break;

                            case "2":
                                Console.WriteLine("How much would you like to withdraw:");
                                string cash = Console.ReadLine();
                                bool valid = int.TryParse(cash, out int cashInput);
                                if (valid && cashInput > 0)
                                {
                                    if (cashInput <= user.Balance)
                                    {
                                        Console.WriteLine($"You withdrew ${cashInput}. You have ${user.CashWithdrawal(cashInput)} left on your account.");
                                    }
                                    else Console.WriteLine("Not enough money!");
                                }
                                else Console.WriteLine("Invalid input");
                                break;

                            case "3":
                                Console.WriteLine("How much would you like to deposit:");
                                string cash2 = Console.ReadLine();
                                bool valid2 = int.TryParse(cash2, out int cashInput2);
                                if (valid2 && cashInput2 > 0)
                                {
                                    if (cashInput2 > 1000000)
                                    {
                                        Console.WriteLine("UJP will be in contact with you");
                                        break;
                                    }
                                    Console.WriteLine($"You Deposited {cashInput2}$. You now have {user.CashDeposit(cashInput2)}$ on your account.");
                                }
                                else Console.WriteLine("Invalid input");
                                break;

                            default: Console.WriteLine("Invalid Input"); break;
                        }
                        Console.WriteLine("would you like to do another transaction? Y/N");
                        string repeatInput = Console.ReadLine();
                        if (repeatInput == "y" || repeatInput == "Y") repeat = false;
                        else Login(numberFormat, pinFormat, users);
                    } while (!repeat);
                }
            }
            if (unregistered)
            {
                Console.WriteLine("User does not exist. Would you like to register? Y/N");
                string input = Console.ReadLine();
                if (input == "y" || input == "Y")
                {
                    Array.Resize(ref users, users.Length + 1);
                    users[^1] = (User)Register(number, pin, numberFormat, pinFormat);
                    
                    Login(numberFormat, pinFormat, users);
                }            
            }
        }
        static object Register(long number, int pin, Regex numberFormat, Regex pinFormat)
        {
            Console.WriteLine("Do you want to keep the same number/pin combination? Y/N");
            string input2 = Console.ReadLine();
            if (input2 == "y" || input2 == "Y")
            {
                Console.WriteLine("Enter your Name:");
                string newName = Console.ReadLine();
                User newUser = new User(newName, number, pin, 0);
                Console.WriteLine("Registration complete!");
                return newUser;
            }
            else
            {
                Console.WriteLine("Enter your Name, Credit card number and pin:");
                string newName = Console.ReadLine();
                bool valid = false;
                while (!valid)
                {
                    Console.WriteLine("Please enter your card number:");
                    string newNumber = Console.ReadLine();
                    Console.WriteLine("Enter pin:");
                    string newPin = Console.ReadLine();

                    if (!pinFormat.IsMatch(newPin) && !numberFormat.IsMatch(newNumber)) continue;
                    valid = true;
                    long newCardNumber = long.Parse(newNumber.Replace("-", string.Empty));
                    int newCardPin = int.Parse(newPin);
                    User newUser = new User(newName, newCardNumber, newCardPin, 0);
                    Console.WriteLine("Registration complete!");
                    return newUser;
                }
            }
        }
    }
}
