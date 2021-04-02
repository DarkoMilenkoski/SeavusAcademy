using System;

namespace StudentGroup
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] studentsG1 = new string[5] { "Zdravko", "Petko", "Stanko", "Branko", "Trajko" };
            string[] studentsG2 = new string[5] { "Kristijan", "Luka", "Petar", "Antonio", "Filip" };

            Console.WriteLine("Enter student group: ( there are 1 and 2 ) ");
            string number = Console.ReadLine();
            bool valid = int.TryParse(number, out int group);

            if (valid && group < 3 && group > 0)
            {
                Console.Write("The students in G" + group + " are:");
                if (group == 1) foreach (string student in studentsG1) Console.Write(" " + student);
                else foreach (string student in studentsG2) Console.Write(" " + student);
            }
            else Console.WriteLine("Invalid input.");
        }
    }
}
