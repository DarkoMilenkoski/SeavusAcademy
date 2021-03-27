using System;

namespace Excercise_6
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Type 2 numbers:");
            string a = Console.ReadLine();
            string b = Console.ReadLine();
            bool successfulConversion = int.TryParse(a, out int first);
            bool successfulConversion2 = int.TryParse(b, out int second);

            if (successfulConversion && successfulConversion2)
            {
                int biggerNumber = (first > second ? first : second);
                Console.WriteLine(biggerNumber + " is bigger, and it's " + (biggerNumber % 2 == 0 ? "even" : "odd"));
            }
            else
            {
                Console.WriteLine("Wrong input");
            }
        }
    }
}
