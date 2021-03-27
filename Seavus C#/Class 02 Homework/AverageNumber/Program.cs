using System;

namespace AverageNumber
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter four numbers:");
            string a = Console.ReadLine();
            string b = Console.ReadLine();
            string c = Console.ReadLine();
            string d = Console.ReadLine();
            bool successfulConversion = float.TryParse(a, out float first);
            bool successfulConversion2 = int.TryParse(b, out int second);
            bool successfulConversion3 = int.TryParse(c, out int third);
            bool successfulConversion4 = int.TryParse(d, out int fourth);

            if (successfulConversion && successfulConversion2 && successfulConversion3 && successfulConversion4)
            {
                float averageNumber = (first + second + third + fourth) / 4;
                Console.WriteLine("The average of " + first + ", " + second + ", " + third + " and " + fourth + " is: " + averageNumber);
            }
            else
            {
                Console.WriteLine("Invalid input");
            }
        }
    }
}
