using System;

namespace RealCalculator
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter two numbers:");
            string a = Console.ReadLine();
            string b = Console.ReadLine();
            Console.WriteLine("Enter operator:");
            string c = Console.ReadLine();
            bool successfulConversion = int.TryParse(a, out int first);
            bool successfulConversion2 = int.TryParse(b, out int second);

            if (successfulConversion && successfulConversion2)
            {
                switch (c)
                {
                    case "+":
                        Console.WriteLine(first + second);
                        break;
                    case "-":
                        Console.WriteLine(first - second);
                        break;
                    case "*":
                        Console.WriteLine(first * second);
                        break;
                    case "/":
                        Console.WriteLine(first / second);
                        break;
                    default:
                        Console.WriteLine("Invalid operator");
                        break;
                }
            }
            else
            {
                Console.WriteLine("Invalid input");
            }
        }
    }
}
