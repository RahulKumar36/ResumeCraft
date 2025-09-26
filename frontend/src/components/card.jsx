import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/userContext"
import { cardStyles } from "../assets/dummystyle"
import { Award, Check, Clock, Edit, Trash2, TrendingUp, Zap } from "lucide-react"



//Profile Info Card
export const ProfileInfoCard = () => {
    const navigate = useNavigate()
    const { user, clearUser } = useContext(UserContext)

    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
    }
    return (
        user && (
            <div className={cardStyles.profileCard}>
                <div className={cardStyles.profileInitialsContainer}>
                    <span className={cardStyles.profileInitialsText}>
                        {user.name ? user.name.charAt(0).toUpperCase() : ""}

                    </span>

                </div>
                <div>
                    <div className={cardStyles.profileName}>
                        {user.name || ""}

                    </div>
                    <button className={cardStyles.logoutButton}
                        onClick={handleLogout}>
                        Logout
                    </button>
                </div>

            </div>
        )
    )
}




// ResumeSummaryCard Component 
export const ResumeSummaryCard = ({
    title = "Untitled Resume",
    createdAt = null,
    updatedAt = null,
    onSelect,
    onDelete,
    completion = 85,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const formattedCreatedDate = createdAt
        ? new Date(createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
          })
        : "—";

    const formattedUpdatedDate = updatedAt
        ? new Date(updatedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
          })
        : "—";

    // Updated colors for dark theme
    const getCompletionColor = () => {
        if (completion >= 90) return "from-green-400 to-teal-400"; // Bright & successful
        if (completion >= 70) return "from-blue-400 to-indigo-500"; // In progress
        return "from-amber-500 to-orange-500"; // Needs attention
    };

    const getCompletionIcon = () => {
        if (completion >= 90) return <Award size={12} />;
        if (completion >= 70) return <TrendingUp size={12} />;
        return <Zap size={12} />;
    };
    
    const handleDeleteClick = (e) => {
        e.stopPropagation();
        if (onDelete) onDelete();
    };

    // background gradients 
    const generateDesign = () => {
        const colors = [
            "from-blue-900/50 to-slate-800/50",
            "from-purple-900/50 to-slate-800/50",
            "from-emerald-900/50 to-slate-800/50",
            "from-amber-900/50 to-slate-800/50",
            "from-rose-900/50 to-slate-800/50"
        ];
        return colors[title.length % colors.length];
    };

    const designColor = generateDesign();

    return (
        <div
            className="group relative flex flex-col bg-slate-800 border border-slate-700 rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:border-indigo-500/50 hover:shadow-indigo-500/10"
            onClick={onSelect}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Completion indicator */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 text-xs font-medium text-slate-300">
                <div className={`relative w-2 h-2 rounded-full bg-gradient-to-r ${getCompletionColor()}`}>
                    <div className="absolute -inset-0.5 animate-ping rounded-full bg-current opacity-50" />
                </div>
                <span>{completion}%</span>
                <span className="text-slate-400">{getCompletionIcon()}</span>
            </div>

            {/* Preview area */}
            <div className={`relative w-full h-48 rounded-t-xl overflow-hidden bg-slate-900/50 bg-gradient-to-br ${designColor}`}>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-indigo-500/20 rounded-full mb-3">
                        <Edit size={28} className="text-indigo-400" />
                    </div>
                    <span className="text-center font-bold text-slate-200">{title}</span>
                    <span className="text-xs text-slate-400 mt-1">
                        {completion === 0 ? "Start building" : `${completion}% completed`}
                    </span>

                    {/* Mini resume sections indicator */}
                    <div className="mt-4 flex gap-2">
                        {['Profile', 'Work', 'Skills', 'Edu'].map((section, i) => (
                            <div
                                key={i}
                                className={`px-2 py-1 text-xs rounded-md transition-colors ${i < Math.floor(completion / 25)
                                    ? 'bg-indigo-500/20 text-indigo-300 font-medium'
                                    : 'bg-slate-700/50 text-slate-400'
                                }`}
                            >
                                {section}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hover overlay with action buttons */}
                {isHovered && (
                    <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (onSelect) onSelect();
                                }}
                                className="flex items-center justify-center w-12 h-12 bg-slate-700 text-slate-200 rounded-full transition-colors hover:bg-indigo-500 hover:text-white"
                                title="Edit"
                            >
                                <Edit size={18} />
                            </button>
                            <button
                                onClick={handleDeleteClick}
                                className="flex items-center justify-center w-12 h-12 bg-slate-700 text-slate-200 rounded-full transition-colors hover:bg-red-500/80 hover:text-white"
                                title="Delete"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Info area */}
            <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                    <h5 className="font-bold text-lg text-slate-100 truncate">{title}</h5>
                    <div className="flex items-center text-xs text-slate-400 mt-1 space-x-2">
                        <Clock size={12} />
                        <span>Created: {formattedCreatedDate}</span>
                        <span>Updated: {formattedUpdatedDate}</span>
                    </div>
                </div>

                <div className="mt-4">
                    {/* Progress bar */}
                    <div className="relative w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-gradient-to-r ${getCompletionColor()} rounded-full transition-all duration-700 ease-out relative`}
                            style={{ width: `${completion}%` }}
                        >
                           {/* Shimmer effect */}
                           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                    </div>

                    {/* Completion status */}
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-xs font-medium text-slate-400">
                            {completion < 50 ? "Getting Started" : completion < 80 ? "Almost There" : "Ready to Go!"}
                        </span>
                        <span className="text-xs font-bold text-slate-200">{completion}% Complete</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


// Templates Card
export const TemplateCards= ({thumbnailImg, isSelected, onSelect})=>{
    return(
        <div className={`group h-auto md:h-[300px] lg:h-[320px] flex flex-col bg-white border-2 overflow-hidden 
        cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-lg rounded-3xl 
        ${isSelected?'border-violet-500 shadow-lg shadow-lg-500/20 bg-violet-50':
            'border-gray-200 hover:border-violet-300'}`} onClick={onSelect}>
                {thumbnailImg?(
                    <div className="relative w-full h-full overflow-hidden">
                        <img src={thumbnailImg || '/placeholder.svg'} alt="Template Review" className="w-full h-full
                        object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent
                        to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>

                        {isSelected && (
                            <div className="absolute inset-0 bg-violet-500/10 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white backdrop-blur-sm rounded-full flex items-center
                                justify-center shadow-lg animate-pulse">
                                    <Check size={24} className="text-violet-600"/>

                                </div>
                            </div>
                        )}
                        {/*Hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-violet-100/30 to-transparent opacity-0
                        group-hover:opacity-100 transition-opacity duration-300">

                        </div>
                    </div>
                ):(
                    <div className="w-full h-[200px] flex items-center flex-col justify-center bg-gradient-to-br
                    from-violet-50 via-violet-600 to-fuchsia-50 ">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex
                        items-center mb-3 justify-center">
                              <Edit size={20} className="text-white"/>
                        </div>
                        <span className="text-gray-700 font-bold">
                            No Preview
                        </span>
                    </div>
                )}

        </div>
    )
}