import { getUserNotes } from "@/utils/action/user.action";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

async function Notes() {
  const user = await currentUser();
  if (!user) redirect("sign-in");
  const notes = await getUserNotes(user.id);
  return (
    <div className="flex gap-5 justify-center items-center flex-wrap">
      {notes.length > 0 ? (
        notes.map((note: any) => (
          <div
            key={note._id}
            className="card card-border bg-base-100 w-full sm:w-96"
          >
            <div className="card-body">
              <h2 className="card-title text-ellipsis">{note.title}</h2>
              <p className="text-ellipsis">{note.content}</p>
              <div className="card-actions justify-end">
                <Link
                  href={`/note/${note._id}`}
                  className="btn rounded-2xl border-0 px-5.5 py-1 text-white bg-[#355c7d]"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>empty note</div>
      )}
    </div>
  );
}

export default Notes;
