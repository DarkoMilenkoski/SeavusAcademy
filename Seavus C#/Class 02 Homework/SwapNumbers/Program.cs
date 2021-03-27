using System;

namespace SwapNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter 2 numbers");
            string a = Console.ReadLine();
            string b = Console.ReadLine();
            bool successfulConversion = int.TryParse(a, out int first);
            bool successfulConversion2 = int.TryParse(b, out int second);

            if (successfulConversion && successfulConversion2)
            {
                int temp = first;
                first = second;
                second = temp;
                Console.WriteLine("First number is now " + first + ", and second number is now " + second);
            }
            else
            {
                Console.WriteLine("Invalid input");
            }
        }
    }
}
